import React from 'react';

import './Footer.scss'
import { Privacy } from '../../components';

export function Footer() {
    return (
        <div class='wrapper'>
            <div class='footer'>
                <div class='footer__info'>
                    <div class='links'>
                        <div class='links__item'>
                            <h2 class='links__title'>Каталог</h2>
                            <div class='links__list'>
                                <a class='links__link' href="#">Магазин</a>
                                <a class='links__link' href="#">Линейки</a>
                                <a class='links__link' href="#">Коллекции</a>
                                <a class='links__link' href="#">Lookbook</a>
                            </div>
                        </div>
                        <div class='links__item'>
                            <h2 class='links__title'>инфо</h2>
                            <div class='links__list'>
                                <a class='links__link' href="#">О бренде</a>
                                <a class='links__link' href="#">Контакты</a>
                                <a class='links__link' href="#">Доставка и оплата</a>
                                <a class='links__link' href="#">обмен и возврат</a>
                                <a class='links__link links__link_uper' href="#">FAQ</a>
                            </div>
                        </div>
                    </div>

                    <div class='contacts'>
                        <div class='contacts__contact'>
                            <a href="tel:+7 919 96-99-95" class='contacts__link'>+7 919 96-99-95</a>
                            <p class='contacts__text'>Звоните</p>
                        </div>

                        <div class='contacts__contact'>
                            <a href="mailto:kukoyaka.store@yandex.ru" class='contacts__link'>kukoyaka.store@yandex.ru</a>
                            <p class='contacts__text'>Пишите</p>
                        </div>

                        <div class='contacts__contact'>
                            <a href="@vasilinciagashop" class='contacts__link'>@vasilinciagashop</a>
                            <p class='contacts__text'>Следите в телеграм</p>
                        </div>
                    </div>

                    <div class='footer__privacy'>
                        <p class='footer__privacy_text'>Подписывайтесь, чтобы узнавать о новых коллекциях, поступлениях и всем-всем-всем раньше всех-всех-всех!</p>
                        <Privacy />
                    </div>
                </div>
                <div class='shop'>
                    <div class='shop__info'>
                        <p class='shop__text'>ИП Кондратьева Людмила Юрьевна</p>
                        <p class='shop__text'>ИНН 183403484917 </p>
                    </div>
                    <div class='shop__links'>
                        <a href="#" class='shop__link'>Не является публичной офертой</a>
                        <a href="#" class='shop__link'>Политика конфиденциальности</a>
                        <a href="#" class='shop__link'>Сертификат соответствия</a>
                        <a href="#" class='shop__link'>Использование cookie</a>
                    </div>
                </div>
            </div>
        </div>
    );
};