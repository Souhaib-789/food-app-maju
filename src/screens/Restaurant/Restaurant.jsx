import React, { useEffect } from "react";
import styles from "./Restaurant.module.css";
import MainImage from "../../assets/main_image.png";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import BannerImage from '../../assets/illustration.png'
import Product_Image_a from '../../assets/s2.png'
import Product_Image_b from '../../assets/s1.jfif'
import Product_Image_c from '../../assets/s3.jfif'
import Product_Image_d from '../../assets/main_image.png'

const Restaurant = () => {

    const items = [
        {
            id: 1,
            name: 'Burger',
            image: Product_Image_a
        },
        {
            id: 2,
            name: 'Pasta',
            image: Product_Image_b
        },
        {
            id: 3,
            name: 'Steak',
            image: Product_Image_c
        },
        {
            id: 4,
            name: 'Choco Cake',
            image: Product_Image_d
        },
    ]

    return (
        <div className={styles.main_div}>
            <text className={styles.restaurant_name}>Lal Qila Restaurant</text>
            <img src="https://lalqila.com/hyderabad/wp-content/uploads/2015/03/Edited-2.jpg" class={`img-fluid ${styles.bg_image}`} alt="..."></img>


            <div className={styles.second_view}>
                <text className={styles.sub_heading}>Available Items</text>
                <div className={styles.items_view}>

                {
            items?.map((item, index) => {
              return (
                <div className={styles.card}>
                  <img src={item?.image} className={styles.card_image} />
                  <div className={styles.card_text_view}>
                    <text className={styles.card_title}>{item?.name}</text>
                    <text style={{ color: 'grey', fontSize: '12px' }}>visual form of a document or a typeface without relying on</text>
                    <div>
                      <text className={styles.card_title}>$ 300 /-</text>
                    </div>
                    <button className={styles.card_button}>ADD TO CART</button>
                  </div>
                </div>
              )
            })
          }
            </div>
            </div>
        </div>
    );
};

export default Restaurant;
