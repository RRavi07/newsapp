import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div>
                <div className="card my-3" >

                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '83%', zIndex: '1' }}>
                        {source}
                    </span>
                    <img src={imageUrl === null ? "https://img.etimg.com/thumb/msid-108164263,width-1200,height-630,imgsize-18024,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author}</small></p>
                        <p className="card-text"><small className="text-body-secondary">D&T {new Date(date).toGMTString()}</small></p>
                        <Link to={newsUrl} target="_blank" className="btn btn-dark">Read more</Link>
                    </div>
                </div>

            </div >

        </>
    )

}

export default NewsItem
