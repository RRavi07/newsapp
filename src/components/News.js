import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Spiner from './Spiner'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async () => {
        try {
            props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(50);
            console.log(parsedData);
            setLoading(false);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults)
            props.setProgress(100);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };


    return (<>
        <div className='container my-3'>
            <h2 className='text-center my-5'>NewsMonkey {props.category} top Headlines</h2>


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spiner />}
            >
                <div className="row container" >
                    {articles.map((element) => (

                        <div className="col-md-3" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description ? element.description.slice(0, 90) : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name}
                            />
                        </div>

                    ))}

                </div>
            </InfiniteScroll>
        </div>
        {/* <div className="d-flex justify-content-between">
                    <button type="button" disabled={ state.page <= 1} className="btn btn-primary" onClick={ handlePreClick}> &larr;  Previous</button>
                    <button type="button" disabled={ state.page >= Math.ceil( state.totalResults /  props.pageSize)} className="btn btn-primary" onClick={ handleNxtClick}> Next &rarr; </button>
                </div> */}
    </>
    );
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'science'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News;
