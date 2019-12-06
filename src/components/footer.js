import React from 'react';
import style from './../styles/module-styles/footer.module.css';


export default class extends React.Component {
    render() {
        return (
            <>
                <div className={style.footer}>
                    <div>
                        <div>Данные предоставлены сайтом <a href="https://newsapi.org/">newsapi.org</a></div>
                    </div>

                    <div className={style.social}>
                        <a className={style.linkA} href="https://vk.com/nigmatulin8" target="_blank"> 
                            <img className={style.socialImg} src="dist/img/vk.png" alt="vKontakte" /> 
                        </a>
                        <a className={style.linkA} href="https://github.com/Nigmatulin8" target="_blank"> 
                            <img className={style.socialImg} src="dist/img/gh.png" alt="GitHub" /> 
                        </a>
                        <a className={style.linkA} href="https://t.me/ProgLin8" target="_blank"> 
                            <img className={style.socialImg} src="dist/img/tg.png" alt="Telegram" /> 
                        </a>
                    </div>
                </div>
            </>      
        )
    }
}
