import css from "./App.module.css";
import articles from "../../libs/articles";
import Article from "../Article";

function App() {
  return (
    <div className={css.App}>
      <h1 className={css.title}>WikiPigeon</h1>
      {articles.map((article, index) => {
        console.log(article, index);
        return <Article className={css.article} article={articles[index]} />;
      })}
    </div>
  );
}

export default App;
