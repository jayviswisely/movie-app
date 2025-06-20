import { useState } from "react"

function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
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
