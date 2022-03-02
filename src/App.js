import Nav from "./components/Nav.js"
import Card from "./components/Card.js"
import cardData  from "./data.js";
function App() {
  const cards = cardData.map(item => {
    return (
      <Card 
          {...item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <section className = "cards-list">
              {cards}
      </section>
    </div>
  );
}

export default App;
