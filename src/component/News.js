import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30)
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(50)
    setArticles(parseData.articles);
    props.setProgress(70)
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100)
  };
  useEffect(() => {
    const capitalizeFirstLetter = (s) =>
      s
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    document.title = `${capitalizeFirstLetter(props.category)} | Topnews`;
    updateNews();
  }, []);

  // handlePreviousClick = async () => {
  //   this.setState({ page: page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   if (
  //     !(
  //       page + 1 >
  //       Math.ceil(this.state.totalResults / props.pageSize)
  //     )
  //   ) {
  //     this.setState({ page: page + 1 });
  //     this.updateNews();
  //   }
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  
const [mode, setMode] = useState("light");
  return (
    <>
      <div>
        <h1 className={ `text-${props.mode === "light" ? "dark" : "light"} text-center`} style={{ marginTop: "75px" }}>
          {" "}
          <strong>
            TODAY'S TOP HEADLINE - {props.category.toUpperCase()}
          </strong>{" "}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className=" container my-3">
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem mode={props.mode} 
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className=" container my-3 d-flex justify-content-between">
              <button
                disabled={page <= 1}
                onClick={this.handlePreviousClick}
                className="btn btn-dark "
              >
                &#8676; Previous
              </button>
              <button
                disabled={
                  page + 1 >
                  Math.ceil(this.state.totalResults / props.pageSize)
                }
                onClick={this.handleNextClick}
                className="btn btn-dark "
              >
                Next &#8677;
              </button>
            </div> */}
      </div>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
