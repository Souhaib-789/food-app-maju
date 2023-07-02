import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import MainImage from "../../assets/main_image.png";
import MainImage3 from "../../assets/main_image3.png";
import MainImage2 from "../../assets/chicken.png";

import { AiOutlineFileDone } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import BannerImage from '../../assets/illustration.png'
import Product_Image_a from '../../assets/main_image.png'
import Product_Image_b from '../../assets/main_image3.png'
import Product_Image_c from '../../assets/rest.jfif'
import Product_Image_d from '../../assets/s2.png'
import { useNavigate } from "react-router";

const Home = () => {
  
  const [restaurants , setrestaurants] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/api/restaurants')
      .then((response) => response.json())
      .then((json) =>  setrestaurants(json.data))
      .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  }, []);

  
  const info = [
    {
      id: 1,
      name: 'Secure Payment',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <RiSecurePaymentFill size={50} color={"#f6371e"} />
    },
    {
      id: 2,
      name: 'Best Quality',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <AiOutlineFileDone size={50} color={"#1e6af6"} />
    },
    {
      id: 1,
      name: 'Easy Delivery',
      description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text',
      icon: <FaShippingFast size={50} color={"#1ef666af"} />
    },
  ]

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
      <div className={styles.home_view_one}>
        <div className={styles.flex} >
          <text className={styles.main_heading}>Discover Restaurants that Deliver Near You</text>
          <text className={styles.span}>
           Order your favorite food from your favotite restaurant. Or book a table with suitable slots and enjoy meal with your loved ones
          </text>

          <button className={styles.main_button} > Learn More</button>
        </div>
        <div className={styles.side_view} >
          <img src={MainImage} className={styles.main_image} />
        </div>
        <img src={MainImage2} className={styles.main_image_2} />
        <img src={MainImage3} className={styles.main_image_3} />

      </div>


      {/* <div className={styles.home_view_two}>
        {
          info.map((item, index) => {
            return (
              <div className={styles.info_card}>
                <div>{item?.icon}</div>
                <div className={styles.info_card_sub_view}>
                  <text className={styles.card_heading}>{item?.name}</text>
                  <text>{item?.description}</text>
                </div>
              </div>
            )
          })
        }
      </div> */}

      <div className={styles.restaurants_view} id="pop">
        <text className={styles.sub_heading}>Available Restaurants</text>
        <div className={styles.home_view_three}>
          {
            items?.map((item, index) => {
              return (
                <div className={styles.restaurant_card}>
                <img src={item?.image} className={styles.card_image} />
                <div className={styles.card_text_view}>
                  <text className={styles.card_title}>{item?.name} </text>
                  <text style={{ color: 'grey', fontSize: '12px' }}>{item?.location}</text>
                 
                  <button className={styles.card_button} onClick={()=> navigate('restaurent')}>VISIT</button>
                </div>
              </div>
              )
            })
          }

        </div>

      </div>

      <div className={styles.home_view_four}>
        <div className={styles.bg_bubble_c}></div>
        <img src={BannerImage} className={styles.banner_image} />
        <div className={styles.banner_sub_view}>
          <text className={styles.sub_heading}>Buy the best food of your favorite choice</text>
          <text className={styles.span}>You can order your favorite meal anytime , anywhere. Just select your favorite restaurant and grab your delicious stuff to make your meal time happy and easy.</text>
        </div>
      </div>

    </div>
  );
};

export default Home;
