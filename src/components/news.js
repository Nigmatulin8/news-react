import React from 'react';
import { connect } from 'react-redux'; 
import ReactList from 'react-list';

import { newsFetchData } from '../store/actions/news.js';
import style from './../styles/module-styles/newsCart.module.css';
import Preloader from './../components/preloader.js';

class News extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if(this.props.news.status === 'ok') {
            let news = this.props.news.articles.map((data, index) => {
                return (
                    <div className={style.newsCart} key={index}>
                        <div className={style.author}>
                            <div>{data.author ? data.author : 'Unknown'} </div>
                            <div className={style.published}>{data.publishedAt}</div>
                        </div>
                        <div className={style.content}>
                            <div className={style.post}>
                                <img className={style.postPhoto} src={data.urlToImage} alt="Post's photo" />
                            </div>
                            <div className={style.newsBody}>
                               <div className={style.title}> {data.title} </div>

                               <div className={style.description}>
                                    {data.description ? data.description.toString().replace(/(&nbsp;|&raquo;|&laquo;)/g, " ") : data.description} 
                                    <a href={data.url} target="_blank"> ...read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
            
            return (
                <>
                    <div className="container news">
                    {news}
                    </div>
                </>       
            )
        }
        else {
            return (
                <Preloader />
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(newsFetchData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);