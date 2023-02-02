
const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
    props;
 
      
   

  return (
    <div className="my-3">
      <div className={`card text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode }`}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "88%" }}
        >
          {source.name}
        </span>
        <img
          src={
            !imageUrl
              ? "https://c.ndtvimg.com/2022-12/lee49jq8_stocks-bloomberg_625x300_16_December_22.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body `}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <p style={{ fontSize: "15px" }}>
            {" "}
            By {!author ? "Unknown" : author} on{" "}
            {new Date(publishedAt).toGMTString()}{" "}
          </p>
          <a
            className="card-link"
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
