import React, { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import Product_Image_a from '../../assets/s2.png'
import Product_Image_b from '../../assets/s1.jfif'
import Product_Image_c from '../../assets/s3.jfif'
import Product_Image_d from '../../assets/main_image.png'
import TableImage from '../../assets/table.png'
import { useDispatch, useSelector } from "react-redux";
import CartActions from "../../redux/Actions/CartActions";
import { HiUserCircle } from "react-icons/hi";
import { Rate, List } from "antd";
import ReviewModal from "../Modal/ReviewModal";
import BookTableModal from "../Modal/BookTableModal";


const Restaurant = () => {
    const dispatch = useDispatch();
    const CART_ITEMS = useSelector(state => state.CartReducer)
    const [products, setproducts] = useState()
    const [openReviewModal, setopenReviewModal] = useState(false);
    const [name, setname] = useState()
    const [statement, setstatement] = useState()
    const [rating, setrating] = useState(0)
    const [openBookTableModal, setopenBookTableModal] = useState(false);



    console.log('+++++++++++++++++++', rating);

    useEffect(() => {
    getResaurantData()
    }, []);

    const getResaurantData = ( ) => {
        // fetch('http://localhost:5000/api/restaurants')
        // .then((response) => response.json())
        // .then((json) => console.log(json.data))
        // .catch((error) => console.error(error))
    } 
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
        dispatch(CartActions.AddtoCart({ name: 'Apple', price: '300' }))
    }

    const onSubmitReview = () => {
        if(!name){
            alert('Please enter your name')
        }
        else if(!statement){
            alert('Please enter review statement')
        }
        else if(!rating){
            alert('Please give rating')
        }
        else{
            setopenReviewModal(false)
        }
    }
    const renderReviewItem = (item, index) => {
        return (
            <div className={styles.review_card}>
                <HiUserCircle size={35} color={'#fe043c'} />
                <div className={styles.review_sub_view}>
                    <text className={styles.text}>M.Souhaib</text>
                    <Rate defaultValue={5} disabled />
                    <p>lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p lorem ipsum dummy p </p>
                </div>
            </div>
        )
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
                        <button onClick={() => setopenBookTableModal(true)}  className={styles.table_button}>Book A Table</button>
                    </div>
                </div>
            </div>

            <text className={styles.sub_heading} style={{marginLeft: '5%'}}>Customers Reviews</text>

            <List
                dataSource={items}
                renderItem={renderReviewItem}
            />

            <button onClick={() => setopenReviewModal(true)} className={styles.review_button}>Add your review</button>

            <ReviewModal
             visible={openReviewModal}
            onClose={()=> setopenReviewModal(false)}
            onSubmit={onSubmitReview} 

            rating={rating}
            onChangeRating={(e)=> setrating(e)}
            name={name} 
            onChangeName={(e)=> setname(e.target.value)}
            
            statement={statement} 
            onChangeStatement={(e)=> setstatement(e.target.value)}/>

<BookTableModal
             visible={openBookTableModal}
            onClose={()=> setopenBookTableModal(false)}
            onSubmit={onSubmitReview} 

            rating={rating}
            onChangeRating={(e)=> setrating(e)}
            name={name} 
            onChangeName={(e)=> setname(e.target.value)}
            
            statement={statement} 
            onChangeStatement={(e)=> setstatement(e.target.value)}/>
        </div>
    );
};

export default Restaurant;
