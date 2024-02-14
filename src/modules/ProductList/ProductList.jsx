import React from 'react';

import { Product } from '../Product/Product';

import './ProductList.scss'

export function ProductList() {
    return (
        <div class='productList'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
};