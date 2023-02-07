import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Landing page with form</h1>

      <button type="button" onClick={() => setCount(prev => prev + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
