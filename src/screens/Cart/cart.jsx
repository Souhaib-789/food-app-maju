import { Input } from "antd";
import React from "react";
import styles from './Cart.module.css'
import Product from '../../assets/chicken.png'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function Cart() {

  const cart_items = [1,2,3]
  return (
    <div className={styles.container}>
      <div className={styles.div_one}>
        <h2>Shopping Cart</h2>

        <div className={styles.total_text_view}>
          <text>Total Cost</text>
          <text><b> $ 5000.00 </b></text>
        </div>

        <h5>Order Details</h5>
        <Input placeholder="Address" bordered={false} className={styles.input} />
        <Input placeholder="Contact Number" bordered={false}  className={styles.input}/>


        <button className={styles.main_button} >Place Order</button>

      </div>

      <div className={styles.div_two}>
        {
          cart_items?.map((item,index) => (
            <div className={styles.product_card}>
            <img src={Product} className={styles.product_image} />
            <div className={styles.card_text_view}>
              <text> <b> Chicken Tandoori </b></text>
              <text>$ 2000.00</text>
            </div>
            <div className={styles.counter_view}>
              <AiOutlineMinusSquare size={20} color={'black'} />
              <text className={styles.quantity}>1</text>
              < AiOutlinePlusSquare size={20} color={'black'} />
            </div>
            <RxCross2 color={'black'} size={18} />
          </div>
          ))
        }
      </div>

      
    </div>
  )
}