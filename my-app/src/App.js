
import './App.css';

function ProductCard(){
  return (
    <article>
      <h2>Iphone 15</h2>
      <img src="images/mac-mini.png"
        alt = "Iphone 15"
        width = "200px"
        height = "120px"
      />
      <p>Specification:</p>
      <ul>
        <li>A17 Pro chip with 6-core GPU</li>
        <li>3x or 5x Telephoto camera</li>
        <li>Up to 29 hours video playback</li>
      </ul>
      <button>Buy (From $999)</button>
    </article>
  )
}

function App() {
  return <div className="App"> 
    <ProductCard />
  </div>;
}

export default App;
