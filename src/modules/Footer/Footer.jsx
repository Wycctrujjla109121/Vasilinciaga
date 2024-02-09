import React from 'react';

import './Footer.scss'
import { Privacy } from '../../components';

export function Footer() {
    return (
        <div className='wrapper'>
            <div className='footer'>
                <div className='footer__info'>
                    <div className='links'>
                        <div className='links__item'>
                            <h2 className='links__title'>Каталог</h2>
                            <div className='links__list'>
                                <a className='links__link' href="#">Магазин</a>
                                <a className='links__link' href="#">Линейки</a>
                                <a className='links__link' href="#">Коллекции</a>
                                <a className='links__link' href="#">Lookbook</a>
                            </div>
                        </div>
                        <div className='links__item'>
                            <h2 className='links__title'>инфо</h2>
                            <div className='links__list'>
                                <a className='links__link' href="#">О бренде</a>
                                <a className='links__link' href="#">Контакты</a>
                                <a className='links__link' href="#">Доставка и оплата</a>
                                <a className='links__link' href="#">обмен и возврат</a>
                                <a className='links__link links__link_uper' href="#">FAQ</a>
                            </div>
                        </div>
                    </div>

                    <div className='contacts'>
                        <div className='contacts__contact'>
                            <a href="tel:+7 919 96-99-95" className='contacts__link'>+7 919 96-99-95</a>
                            <p className='contacts__text'>Звоните</p>
                        </div>

                        <div className='contacts__contact'>
                            <a href="mailto:kukoyaka.store@yandex.ru" className='contacts__link'>kukoyaka.store@yandex.ru</a>
                            <p className='contacts__text'>Пишите</p>
                        </div>

                        <div className='contacts__contact'>
                            <a href="@vasilinciagashop" className='contacts__link'>@vasilinciagashop</a>
                            <p className='contacts__text'>Следите в телеграм</p>
                        </div>
                    </div>

                    <div className='footer__privacy'>
                        <p className='footer__privacy_text'>Подписывайтесь, чтобы узнавать о новых коллекциях, поступлениях и всем-всем-всем раньше всех-всех-всех!</p>
                        <Privacy />
                    </div>
                </div>
                <div className='shop'>
                    <div className='shop__info'>
                        <p className='shop__text'>ИП Кондратьева Людмила Юрьевна</p>
                        <p className='shop__text'>ИНН 183403484917 </p>
                    </div>
                    <div className='shop__links'>
                        <a href="#" className='shop__link'>Не является публичной офертой</a>
                        <a href="#" className='shop__link'>Политика конфиденциальности</a>
                        <a href="#" className='shop__link'>Сертификат соответствия</a>
                        <a href="#" className='shop__link'>Использование cookie</a>
                    </div>
                </div>
            </div>
        </div>
    );
};