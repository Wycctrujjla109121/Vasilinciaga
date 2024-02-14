import React from 'react';

import './Header.scss'

export function Header() {
    return (
        <header class='header'>
            <div class='header__info'>
                <a href="/" class='header__link'>KUKOYAKA</a>
                <p class='header__text'>Магазин</p>
            </div>
            <div class='navigation'>
                <div class='navigation__list'>
                    <a href="#" class='navigation__link navigation__link_uper'>NEW DROP</a>
                    <a href="#" class='navigation__link'>Магазин</a>
                    <a href="#" class='navigation__link'>Линейки</a>
                    <a href="#" class='navigation__link'>Инфо</a>
                </div>
                <div class='navigation__info'>
                    <a href="#" class='navigation__button'>поиск</a>
                    <a href="#" class='navigation__button'>Корзина (23)</a>
                </div>
            </div>
        </header>
    );
};