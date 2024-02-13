import React from 'react';

import './Header.scss'

export function Header() {
    return (
        <header class='header'>
            <a href="/" class='header__link'>KUKOYAKA</a>
            <div className='navigation'>
                <div className='navigation__list'>
                    <a href="#" className='navigation__link navigation__link_uper'>NEW DROP</a>
                    <a href="#" className='navigation__link'>Магазин</a>
                    <a href="#" className='navigation__link'>Линейки</a>
                    <a href="#" className='navigation__link'>Инфо</a>
                </div>
                <div className='navigation__info'>
                    <a href="#" className='navigation__button'>поиск</a>
                    <a href="#" className='navigation__button'>Корзина (23)</a>
                </div>
            </div>
        </header>
    );
};