import React from 'react';
import styles from './../styles/module-styles/header.module.css';
import { newsFetchData } from './../store/actions/news.js';
import { connect } from 'react-redux'; 

class Header extends React.Component {
    state = {
        days: {
            "Mon":"Monday",
            "Tue":"Tuesday",
            "Wed":"Wednesday",
            "Thu":"Thursday",
            "Fri":"Friday",
            "Sat":"Saturday",
            "Sun":"Sunday",
        },

        country: [
            {
                domain: "ca",
                country: "Canada",
                ref: React.createRef(),
            },
            {
                domain: "fr",
                country: "France",
                ref: React.createRef(),
            },
            {
                domain: "jp",
                country: "Japan",
                ref: React.createRef(),
            },
            {
                domain: "ru",
                country: "Russia",
                ref: React.createRef(),
            },
            {
                domain: "us",
                country: "USA",
                ref: React.createRef(),
            },
            {
                domain: "gr",
                country: "Greece",
                ref: React.createRef(),
            },
            {
                domain: "it",
                country: "Italia",
                ref: React.createRef(),
            },
            {
                domain: "br",
                country: "Brazil",
                ref: React.createRef(),
            },
        ],

        fullDate: {}
    };

    getNewCountry = () => {

    }

    getDate = () => {
        let time = new Date();
        let fullDayObj = {};

       
        fullDayObj.date = time.toISOString().match(/\d{1,4}-\d{1,2}-\d{1,2}/)[0];
        fullDayObj.time = time.toString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0];
        fullDayObj.day = this.state.days[time.toString(). match(/[aA-zZ]{3}/)[0]];
        
        console.log(time.toTimeString());
        fullDayObj.tick = function() {
            let newTime = new Date();
            this.time = newTime.toString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0];
        }
        
        setInterval(() => {
            this.time.tick();
            this.forceUpdate()
        }, 1000);

        return fullDayObj;
    }

    time = this.getDate();

    updNews = domain => {
        console.log(this.props)
        this.props.fetchData(domain);
    }


    render() {
        let buttons = this.state.country.map((country, index) => {
            return (
                <button key={index} className={styles.buttons + " btn btn-info"} 
                        value={country.domain} ref={country.ref}
                        onClick={() => this.updNews(country.ref.current.value)}
                > 
                   
                    {country.country}
                </button>
            )
        });

        return (
            <>
                <div className={styles.header}>
                    <div className={styles.logo_name}>
                        <img className={styles.logo} src="dist/img/news.jpg" alt="news icon" />
                        <div className={styles.name}> 
                            Daily News 
                            <div className={styles.date}>
                                {this.time.date}  {this.time.day}  {this.time.time}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.countries + " container"}>
                   {buttons}
                </div>
            </>      
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (domain) => {
            dispatch(newsFetchData(domain));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);