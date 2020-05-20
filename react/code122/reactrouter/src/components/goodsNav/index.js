import React from 'react';
import {withRouter} from 'react-router-dom';

function GoodsNav(props) {
    const goPage = (url) => {
        props.history.replace(url);
    }
    return (
        <ul>
            <li onClick={goPage.bind(this, '/goods/item')}>商品</li>
            <li onClick={goPage.bind(this, '/goods/details')}>详细</li>
            <li onClick={goPage.bind(this, '/goods/review')}>评价</li>
        </ul>
    )
}

export default withRouter(GoodsNav);