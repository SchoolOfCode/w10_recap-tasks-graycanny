import "./App.css";
import articles from "../../libs/articles";
import Article from "../Article";

function App() {
  return (
    <div className="App">
      <h1 className="title">WikiPigeon</h1>
      {articles.map((article, index) => {
        console.log(article, index);
        return <Article className="article" article={articles[index]} />;
      })}
    </div>
  );
}

export default App;
