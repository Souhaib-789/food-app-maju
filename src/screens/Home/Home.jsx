import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import MainImage from "../../assets/main_image.png";
import MainImage3 from "../../assets/main_image3.png";
import MainImage2 from "../../assets/chicken.png";

import { AiOutlineFileDone } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import BannerImage from "../../assets/illustration.png";
import { useNavigate } from "react-router";
import { GoLocation } from "react-icons/go";
import apicall from "../../utils/axios";
import { Skeleton } from "antd";
import ErrorModal from "../../components/Modal/ErrorModal";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const info = [
  //   {
  //     id: 1,
  //     name: "Secure Payment",
  //     description:
  //       "Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text",
  //     icon: <RiSecurePaymentFill size={50} color={"#f6371e"} />,
  //   },
  //   {
  //     id: 2,
  //     name: "Best Quality",
  //     description:
  //       "Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text",
  //     icon: <AiOutlineFileDone size={50} color={"#1e6af6"} />,
  //   },
  //   {
  //     id: 1,
  //     name: "Easy Delivery",
  //     description:
  //       "Lorem ipsum is a placeholder text commonly used to demonstrate the dummy text",
  //     icon: <FaShippingFast size={50} color={"#1ef666af"} />,
  //   },
  // ]

  useEffect(() => {
    const getAllRestuarants = async () => {
      try {
        const response = await apicall.get(`/restaurants`);
        setRestaurants(response?.data?.data);
      } catch (error) {
        setModal(true);
        if (error.message === "Network Error") return setError("Network Error");
        setError(error?.response?.data?.message);
      }
    };
    getAllRestuarants();
  }, []);

  return (
    <div className={styles.main_div}>
      <div className={styles.home_view_one}>
        <div className={styles.flex}>
          <text className={styles.main_heading}>
            Discover Restaurants that Deliver Near You
          </text>
          <text className={styles.span}>
            Order your favorite food from your favotite restaurant. Or book a
            table with suitable slots and enjoy meal with your loved ones
          </text>

          <button className={styles.main_button}> Learn More</button>
        </div>
        <div
          className={styles.side_view}
          data-aos={"fade-up"}
          data-aos-duration="2000"
        >
          <img src={MainImage} className={styles.main_image} />
        </div>
        <img
          src={MainImage2}
          className={styles.main_image_2}
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <img
          src={MainImage3}
          className={styles.main_image_3}
          data-aos="fade-left"
          data-aos-duration="2000"
        />
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
          {!restaurants.length && !error ? (
            Array.from({ length: 6 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className={styles.restaurant_card}
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <Skeleton.Image
                    active
                    className={styles.card_image}
                    size={100}
                  />
                  <div className={styles.card_text_view}>
                    <Skeleton.Input active className={styles.card_title} />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Skeleton.Input active />
                    </div>
                    <Skeleton.Input
                      active
                      className={styles.card_button_skeleton}
                    />
                  </div>
                </div>
              );
            })
          ) : error ? (
            <h5 style={{ color: "red" }}>{error}</h5>
          ) : (
            restaurants?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.restaurant_card}
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <img src={item?.image} className={styles.card_image} />
                  <div className={styles.card_text_view}>
                    <text className={styles.card_title}>{item?.name} </text>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <GoLocation size={15} color={"grey"} />
                      <text className={styles.card_subtitle}>
                        {item?.location}
                      </text>
                    </div>

                    <button
                      className={styles.card_button}
                      onClick={() =>
                        navigate(
                          `restaurant/${item?.name?.split(" ")?.join("")}`,
                          { state: { id: item?._id } }
                        )
                      }
                    >
                      VISIT
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className={styles.home_view_four}>
        <div className={styles.bg_bubble_c}></div>
        <img
          src={BannerImage}
          className={styles.banner_image}
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <div
          className={styles.banner_sub_view}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <text className={styles.sub_heading}>
            Buy the best food of your favorite choice
          </text>
          <text className={styles.span}>
            You can order your favorite meal anytime , anywhere. Just select
            your favorite restaurant and grab your delicious stuff to make your
            meal time happy and easy.
          </text>
        </div>
      </div>

      <ErrorModal
        visible={modal}
        onOk={() => {
          setModal(false);
        }}
        title={error}
      />
    </div>
  );
};

export default Home;
