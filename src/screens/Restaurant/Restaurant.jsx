import React, { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import Product_Image_a from '../../assets/s2.png'
import Product_Image_b from '../../assets/s1.jfif'
import Product_Image_c from '../../assets/s3.jfif'
import Product_Image_d from '../../assets/main_image.png'
import TableImage from '../../assets/table.png'
import { useDispatch, useSelector } from "react-redux";
import CartActions from "../../redux/Actions/CartActions";
import { FaUserAlt } from "react-icons/fa";


const Restaurant = () => {
const dispatch = useDispatch();
const CART_ITEMS = useSelector(state => state.CartReducer)
const [products , setproducts] = useState()
console.log('+++++++++++++++++++', CART_ITEMS);

useEffect(() => {
    fetch('http://localhost:5000/api/restaurants')
      .then((response) => response.json())
      .then((json) =>  console.log(json.data))
      .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  }, []);
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

    const addToCart = () => {
        dispatch(CartActions.AddtoCart({name: 'Apple', price: '300'}))
    }

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
                                        <button onClick={addToCart} className={styles.card_button} >ADD TO CART</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={styles.third_view}>
                <text className={styles.sub_heading}>Available Tables</text>
                <text className={styles.text}> <span style={{ color: '#fe043c', fontWeight: "bold" }} >3</span> tables available</text>

                <div className={styles.table_sub_view}>
                    <img src={TableImage} className={styles.table_image} />
                    <div className={styles.flexD}>
                        <text className={styles.mini_heading}>Book A Table</text>
                        <text>Book your reservation and enjoy at your choosen timings at our restaurant</text>
                        <button className={styles.table_button}>Book A Table</button>
                    </div>
                </div>
            </div>


            <div>
                <FaUserAlt size={30} color={'#fe043c'} />
                <div className={styles.review_sub_view}>
                    <text className={styles.text}>USer One</text>
                    <text>lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text </text>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
