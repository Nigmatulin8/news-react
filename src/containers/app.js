import React from 'react';

import style from './../styles/module-styles/newsCart.module.css';

import Header from './../components/header.js';
import News from './../components/news.js';
import Footer from './../components/footer.js';

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={style.headline}> Latest news from the internet </div>
        <News />
        <Footer />
      </>
    );
  }
}
