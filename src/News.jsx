import { contextApi } from "./context";
import { useContext } from "react";
const News = () => {
  const { news, readMore, remove } = useContext(contextApi);
  return (
    <section className="articles">
      {news.map((data) => {
        const {
          objectID: id,
          title,
          url: source,
          author,
          points,
          num_comments: comments
        } = data;

        return (
          <article className="article" key={id}>
            <h4>{title}</h4>
            <span className="article__info">
              {points} points by {author} | {comments} comments
            </span>
            <div className="article__cta">
              <button
                className="article__read"
                onClick={(e) => readMore(source)}
              >
                Read More
              </button>
              <button className="article__btn" onClick={(e) => remove(id)}>
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default News;
