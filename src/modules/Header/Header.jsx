import React from 'react';

import s from './Header.module.scss'

export function Header() {
    return (
        <header className={s.header}>
            <a href="/" className={s.header__link}>KUKOYAKA</a>
        </header>
    );
};