import React, { useEffect, useState } from "react"
import styles from "./Restaurant.module.css"
import TableImage from "../../assets/table.png"
import { useDispatch, useSelector } from "react-redux"
import CartActions from "../../redux/Actions/CartActions"
import { HiUserCircle } from "react-icons/hi"
import { Rate } from "antd"
import { FaCalendarCheck } from "react-icons/fa"
import ReviewModal from "../../components/Modal/ReviewModal"
import BookTableModal from "../../components/Modal/BookTableModal"
import { useLocation } from "react-router-dom"
import apicall from "../../utils/axios"
import { Container, Grid } from "@mui/material"
import SuccessModal from "../../components/Modal/SuccessModal"
import ErrorModal from "../../components/Modal/ErrorModal"

const Restaurant = () => {
  const location = useLocation()
  const id = location?.state?.id
  const dispatch = useDispatch()
  const [restaurant, setRestaurant] = useState([])
  const [data, getData] = useState(false)
  const [openReviewModal, setopenReviewModal] = useState(false)
  const [Modal, setModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [error, setError] = useState(false)
  const [name, setname] = useState()
  const [statement, setstatement] = useState()
  const [rating, setrating] = useState(0)
  const [openBookTableModal, setopenBookTableModal] = useState(false)

  const [customerName, setcustomerName] = useState()
  const [customerContact, setcustomerContact] = useState()
  const [customerInfo, setcustomerInfo] = useState()
  const [selectedDate, setselectedDate] = useState()
  const [tableType, settableType] = useState()

  const [TableData, setTableData] = useState(null)
  const bookingID = Math.random().toString().substring(2, 8)

  const [bookTableData, setBookTableData] = useState({
    date: "",
    time: "",
    no_of_seats: "",
    name: "",
    phone: "",
    additional_info: "",
  })

  const handleBookTableChange = (e) => {
    const { name, value } = e.target
    setBookTableData({
      ...bookTableData,
      [name]: value,
    })
  }

  const onChangeDate = (date) => {
    setBookTableData({
      ...bookTableData,
      date,
    })
  }
  const onSelectSeats = (seats) => {
    setBookTableData({
      ...bookTableData,
      no_of_seats: seats,
    })
  }

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const response = await apicall.get(`/restaurant/${id}`)
        setRestaurant(response?.data?.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRestaurantData()
  }, [data])

  const addToCart = (e) => {
    dispatch(CartActions.AddtoCart(e))
    setModal(true)
  }

  const onSubmitReview = async () => {
    if (!name) {
      setError("Please enter your name")
      setErrorModal(true)
    } else if (!statement) {
      setError("Please enter review statement")
      setErrorModal(true)
    } else if (!rating) {
      setError("Please give rating")
      setErrorModal(true)
    } else if (name && statement && rating) {
      try {
        await apicall.put(`/review`, {
          id,
          reviewer: name,
          review: statement,
          rating: rating,
        })
        getData(true)
        setopenReviewModal(false)
        setname("")
        setstatement("")
        setrating("")
      } catch (error) {
        setopenReviewModal(false)
        setErrorModal(true)
        if (error.message === "Network Error") return setError("Network Error")
        setError(error?.response?.data?.message)
      }
    }
  }

  const onPressBooktable = () => {
    if (!bookTableData.name) {
      setError("Please enter your name")
    } else if (!bookTableData.phone) {
      setError("Please enter contact number")
    } else if (!bookTableData.no_of_seats) {
      setError("Please select table type")
    } else if (!bookTableData.date) {
      setError("Please select table type")
    } else if (!bookTableData.time) {
      setError("Please select table type")
    } else {
      setopenBookTableModal(false)
    }
  }

  return (
    <>
      <div className={styles.main_div}>
        <text
          data-aos="flip-left"
          data-aos-duration="2000"
          className={styles.restaurant_name}
        >
          {restaurant?.name}
        </text>
        <img
          src={restaurant?.image}
          class={`img-fluid ${styles.bg_image}`}
          alt="restaurant image"
        ></img>

        <div className={styles.second_view}>
          <text className={styles.sub_heading}>Available Items</text>
          <div className={styles.items_view}>
            {restaurant?.dishes?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.card}
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img
                    src={item?.image}
                    alt="dish image"
                    className={styles.card_image}
                  />
                  <div className={styles.card_text_view}>
                    <text className={styles.card_title}>{item?.name}</text>
                    <text style={{ color: "grey", fontSize: "12px" }}>
                      {item?.description}
                    </text>
                    <div>
                      <text className={styles.card_title}>
                        PKR {item?.price} /-
                      </text>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className={styles.card_button}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.third_view}>
          <text className={styles.sub_heading}>Available Tables</text>
          <text className={styles.text}>
            <span style={{ color: "#fe043c", fontWeight: "bold" }}>3</span>{" "}
            tables available
          </text>

          <div className={styles.table_sub_view}>
            <img src={TableImage} className={styles.table_image} />

            {TableData ? (
              <div className={styles.flexD}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FaCalendarCheck color={"#32cd32"} size={20} />
                  <text className={styles.mini_heading}> Table Booked !</text>
                </div>
                <text>
                  Your dinner reservation has been confirmed for the category of{" "}
                  <b>{TableData?.tableSeaters} seaters</b> on the slot of{" "}
                  {TableData?.bookedDate}
                </text>
                <text>
                  <b> Booking ID #</b> : {bookingID}{" "}
                </text>
              </div>
            ) : (
              <div className={styles.flexD}>
                <text className={styles.mini_heading}>Book A Table</text>
                <text>
                  Book your reservation and enjoy at your choosen timings at our
                  restaurant
                </text>
                <button
                  onClick={() => setopenBookTableModal(true)}
                  className={styles.table_button}
                >
                  Book A Table
                </button>
              </div>
            )}
          </div>
        </div>

        <text className={styles.sub_heading} style={{ marginLeft: "5%" }}>
          Customers Reviews
        </text>

        {restaurant?.reviews?.length ? (
          restaurant?.reviews?.map((review, index) => {
            return (
              <div key={index} className={styles.review_card}>
                <HiUserCircle size={35} color={"#fe043c"} />
                <div className={styles.review_sub_view}>
                  <text className={styles.text}>{review?.reviewer}</text>
                  <Rate defaultValue={review?.rating} disabled />
                  <p>{review?.review}</p>
                </div>
              </div>
            )
          })
        ) : (
          <div className={styles.review_card}>
            <div className={styles.review_sub_view}>
              <p style={{ color: "grey" }}>No reviews yet.</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setopenReviewModal(true)}
          className={styles.review_button}
        >
          Add your review
        </button>

        <ReviewModal
          visible={openReviewModal}
          onClose={() => setopenReviewModal(false)}
          onSubmit={onSubmitReview}
          rating={rating}
          onChangeRating={(e) => setrating(e)}
          name={name}
          onChangeName={(e) => setname(e.target.value)}
          statement={statement}
          onChangeStatement={(e) => setstatement(e.target.value)}
        />

        <BookTableModal
          visible={openBookTableModal}
          onClose={() => setopenBookTableModal(false)}
          onSubmit={onPressBooktable}
          onChange={handleBookTableChange}
          onChangeDate={onChangeDate}
          onSelectSeats={onSelectSeats}
          data={bookTableData}
        />
      </div>

      <SuccessModal
        visible={Modal}
        onOk={() => {
          setModal(false)
        }}
        title="Item added to cart successfully"
      />

      <ErrorModal
        visible={errorModal}
        onOk={() => {
          setErrorModal(false)
        }}
        title={error}
      />
    </>
  )
}

export default Restaurant
