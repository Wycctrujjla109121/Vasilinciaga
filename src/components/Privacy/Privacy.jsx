import React from 'react';

import './Privacy.scss'

export function Privacy() {
    return (
        <form class='privacy'>
            <div class='privacy__info'>
                <input class='privacy__input' placeholder='Ваша почта' type='email' />
                <button class='privacy__button' type='submit'>Подписаться</button>
            </div>
            <a href='#' target='_blank' class='privacy__link'>
                Нажимая «Подписаться» вы соглашаетесь с <span class='privacy__link_span'>политикой конфиденциальности</span>
            </a>
        </form>
    );
};