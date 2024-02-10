import React, { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import TableImage from "../../assets/table.png";
import { useDispatch, useSelector } from "react-redux";
import CartActions from "../../redux/Actions/CartActions";
import { HiUserCircle } from "react-icons/hi";
import { Rate } from "antd";
import { FaCalendarCheck } from "react-icons/fa";
import ReviewModal from "../../components/Modal/ReviewModal";
import BookTableModal from "../../components/Modal/BookTableModal";
import { useLocation } from "react-router-dom";
import apicall from "../../utils/axios";
import { Container, Grid } from "@mui/material";
import SuccessModal from "../../components/Modal/SuccessModal";
import ErrorModal from "../../components/Modal/ErrorModal";

const Restaurant = () => {
  const location = useLocation();
  const id = location?.state?.id;
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState([]);
  const [data, getData] = useState(false);
  const [openReviewModal, setopenReviewModal] = useState(false);
  const [Modal, setModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState("");
  const [name, setname] = useState();
  const [statement, setstatement] = useState();
  const [rating, setrating] = useState(0);
  const [openBookTableModal, setopenBookTableModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [TableData, setTableData] = useState(null);
  const bookingID = Math.random().toString().substring(2, 8);

  const [bookTableData, setBookTableData] = useState({
    date: "",
    time: { from: "", to: "" },
    no_of_seats: "",
    name: "",
    phone: "",
    additional_info: "",
  });

  const handleBookTableChange = (e) => {
    const { name, value, id } = e.target;
    if (name === "time") {
      setBookTableData((prevData) => ({
        ...prevData,
        time: {
          ...prevData.time,
          [id.includes("timepickerFrom") ? "from" : "to"]: value,
        },
      }));
    } else {
      setBookTableData({
        ...bookTableData,
        [name]: value,
      });
    }
  };

  const onChangeDate = (date) => {
    setBookTableData({
      ...bookTableData,
      date,
    });
  };
  const onSelectSeats = (seats) => {
    setBookTableData({
      ...bookTableData,
      no_of_seats: seats,
    });
  };

  useEffect(() => {
    const getRestaurantData = async () => {
      try {
        const response = await apicall.get(`/restaurant/${id}`);
        setRestaurant(response?.data?.data);
      } catch (error) {
        setErrorModal(true);
        if (error.message === "Network Error") return setError("Network Error");
        setError(error?.response?.data?.message);
      }
    };
    getRestaurantData();
  }, [data]);

  const addToCart = (e) => {
    dispatch(CartActions.AddtoCart(e));
    setModal(true);
  };

  const onSubmitReview = async () => {
    if (!name) {
      setError("Please enter your name");
      setErrorModal(true);
    } else if (!statement) {
      setError("Please enter review statement");
      setErrorModal(true);
    } else if (!rating) {
      setError("Please give rating");
      setErrorModal(true);
    } else if (name && statement && rating) {
      setLoading(true);
      try {
        await apicall.put(`/review`, {
          id,
          reviewer: name,
          review: statement,
          rating: rating,
        });
        getData(true);
        setopenReviewModal(false);
        setname("");
        setstatement("");
        setrating("");
        setLoading(false);
      } catch (error) {
        setopenReviewModal(false);
        setErrorModal(true);
        setLoading(false);
        if (error?.message === "Network Error")
          return setError("Network Error");
        setError(error?.response?.data?.message);
      }
    }
  };

  const onPressBooktable = async () => {
    if (!bookTableData.name) {
      setErrorModal(true);
      setError("Please enter your name");
    } else if (!bookTableData.phone) {
      setErrorModal(true);
      setError("Please enter contact number");
    } else if (!bookTableData.no_of_seats) {
      setErrorModal(true);
      setError("Please select table type");
    } else if (!bookTableData.date) {
      setErrorModal(true);
      setError("Please select date");
    } else if (!bookTableData.time.from) {
      setErrorModal(true);
      setError("Please enter start time");
    } else if (!bookTableData.time.to) {
      setErrorModal(true);
      setError("Please enter end time");
    } else {
      setLoading(true);
      try {
        const response = await apicall.post(`/book-table`, {
          ...bookTableData,
          restaurant: id,
        });
        setLoading(false);
        setModal(true);
        setSuccessMessage(response?.data?.message);
      } catch (error) {
        setLoading(false);
        setErrorModal(true);
        if (error?.message === "Network Error")
          return setError("Network Error");
        setError(error?.response?.data?.message);
      }
    }
  };

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
          alt=""
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
              );
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
            );
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
          loading={loading}
        />

        <BookTableModal
          visible={openBookTableModal}
          onClose={() => setopenBookTableModal(false)}
          onSubmit={onPressBooktable}
          onChange={handleBookTableChange}
          onChangeDate={onChangeDate}
          onSelectSeats={onSelectSeats}
          data={bookTableData}
          loading={loading}
        />
      </div>

      <SuccessModal
        visible={Modal}
        onOk={() => {
          setModal(false);
        }}
        title={
          successMessage ? successMessage : "Item added to cart successfully"
        }
      />

      <ErrorModal
        visible={errorModal}
        onOk={() => {
          setErrorModal(false);
        }}
        title={error}
      />
    </>
  );
};

export default Restaurant;
