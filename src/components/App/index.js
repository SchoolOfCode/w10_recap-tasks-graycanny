import "./App.css";
import articles from "../../libs/articles";
import Article from "../Article";

function App() {
  return (
    <div className="App">
      <h1>WikiPigeon</h1>
      {articles.map((article, index) => {
        return <Article article={articles[index]} />;
      })}
    </div>
  );
}

export default App;
