export default function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Header</h2>
      <label htmlFor="input">Your name</label>
      <input id="input" />
      <a className="article__link" href="https://github.com/Serco627">
        Sercos Github profile
      </a>
    </article>
  );
}
