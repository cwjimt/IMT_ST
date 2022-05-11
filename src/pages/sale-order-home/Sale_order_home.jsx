import React from 'react';
import Sale_promotion_header from '../../components/sale_promotion_header/sale_promotion_header';
import Sale_order_list from '../../components/sale-order-list/sale_order_list';
import Order_select_page from '../../components/Sale_order_main/Order_select_page';

function Sale_order_home() {
    return (
        <div>
            <Sale_promotion_header/>
            <Order_select_page/>
            <Sale_order_list/>
        </div>
    );
}

export default Sale_order_home;