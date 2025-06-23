import React, { useState } from 'react';

function GeminiChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:4000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h2>Ask Gemini AI</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter your question..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default GeminiChat;