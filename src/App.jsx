import { useState, useEffect, use } from "react"

function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log(`${title} has been liked : ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => {setCount(count+1)}}>
      <h2>
        {title}
        <br />
        {count || null}  
      </h2>
      <button onClick={() => {setHasLiked(!hasLiked)}}>
        {hasLiked ? "❤️" : "🖤"}
      </button>
    </div> 
  )
}

function App() {
  return (
    <div className="card-container">
      <Card title="Movie 1"/>
      <Card title="Movie 2"/>
      <Card title="Movie 3"/>
    </div>
  )
}

export default App
