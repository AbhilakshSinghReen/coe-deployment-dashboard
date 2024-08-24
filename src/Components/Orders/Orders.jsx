import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>Overall Statistics</span>
            </div>


            <div className={css.orderChart}>
                {/* <span>Split by orders</span> */}
                <OrdersPieChart/>
            </div>
        </div>
    )
}

export default Orders