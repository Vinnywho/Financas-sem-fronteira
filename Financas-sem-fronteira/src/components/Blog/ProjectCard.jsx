const BlogCard = ({ title, desc, bgImage}) => (
  <div className="blog-card" style={{ backgroundImage: `url(${bgImage})` }}>
    <h3>{title}</h3>
    <p>{desc}</p>
    <button className="btn-blog">Saiba mais</button>
  </div>
);

export default BlogCard;