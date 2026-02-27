const BlogCard = ({ title, desc, bgImage, tipo, autor, autorImg, data }) => (
  <div className="blog-card">
    <img src={bgImage} alt={title} />
    <span className="tipo">{tipo}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
    {/* <button className="btn-blog">Saiba mais</button> */}
    <div className="autor">
      <img src={autorImg} alt={autor} />
      <div>
        <span className="autor-nome">{autor}</span>
        <span>{data}</span>
      </div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="setinha"
      >
        <path
          d="M1 11L11 1M11 1H1M11 1V11"
          stroke="#101828"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default BlogCard;
