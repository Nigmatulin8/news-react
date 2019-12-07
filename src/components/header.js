import React from 'react';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import styles from './../styles/module-styles/header.module.css';
import { getNews } from './../store/actions/news.js';

const days = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

class Header extends React.Component {
  state = {
    country: [
      {
        domain: 'ca',
        country: 'Canada',
      },
      {
        domain: 'fr',
        country: 'France',
      },
      {
        domain: 'jp',
        country: 'Japan',
      },
      {
        domain: 'ru',
        country: 'Russia',
      },
      {
        domain: 'us',
        country: 'USA',
      },
      {
        domain: 'gr',
        country: 'Greece',
      },
      {
        domain: 'it',
        country: 'Italia',
      },
      {
        domain: 'br',
        country: 'Brazil',
      },
    ],

    date: dayjs(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: dayjs(),
      });
    }, 1000);
  }

  updNews = domain => {
    console.log(this.props);
    this.props.getNews(domain);
  };

  render() {
    const { date } = this.state;
    let buttons = this.state.country.map((country, index) => {
      return (
        <button
          key={index}
          className={styles.buttons + ' btn btn-info'}
          onClick={() => this.updNews(country.domain)}>
          {country.country}
        </button>
      );
    });

    return (
      <>
        <div className={styles.header}>
          <div className={styles.logo_name}>
            <img
              className={styles.logo}
              src="dist/img/news.jpg"
              alt="news icon"
            />
            <div className={styles.name}>
              Daily News
              <div className={styles.date}>
                {date.format('YYYY-MM-DD HH:mm:ss')}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.countries + ' container'}>{buttons}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.collection,
  };
};

const mapDispatchToProps = {
  getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
