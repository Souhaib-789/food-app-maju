import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from "./orders.module.css"
import apicall from "../../utils/axios"

const Orders = () => {
  const cartItems = useSelector((state) => state?.CartReducer?.cartItems)
  const userData = useSelector((state) => state?.UserReducer?.user)
  const [orders, setOrders] = useState([])
  const [error, setError] = useState([])

  //   userData?.user?._id

  useEffect(() => {
    const getSingleUsersOrder = async () => {
      try {
        const response = await apicall.get(`/order/${userData?.user?._id}`)
        setOrders(response?.data?.data)
      } catch (error) {
        // setModal(true)
        if (error.message === "Network Error") return setError("Network Error")
        setError(error?.response?.data?.message)
      }
    }
    getSingleUsersOrder()
  }, [])

  return (
    <div className={styles.main_container}>
      <h3>My Orders</h3>
      {orders?.length ? (
        orders?.map((item, index) => {
          let totalCost = 0

          return (
            <div key={index} className={`${styles.orders_container}`}>
              <div key={index} className={`${styles.product_card}`}>
                <div className={styles.card_text_view}>
                  <b> Order Id</b>
                  <p>{item?._id}</p>
                </div>
                <div className={styles.card_text_view}>
                  <b> Email</b>
                  <p>{item?.email}</p>
                </div>
                <div className={styles.card_text_view}>
                  <b> Phone</b>
                  <p>{item?.phone}</p>
                </div>
                <div className={styles.card_text_view}>
                  <b> Address</b>
                  <p>{item?.address}</p>
                </div>
                <div className={styles.card_text_view}>
                  <b> Status</b>
                  <p>{item?.status}</p>
                </div>
              </div>

              <div className={styles.product_details}>
                {item?.products?.map((val) => {
                  const productCost = val?.price * val?.quantity
                  totalCost += productCost

                  return (
                    <div key={val?.id} className={styles.product_details_inner}>
                      <div>
                        <img
                          src={val?.image}
                          className={styles.product_image}
                        />
                      </div>
                      <div className={styles.product_details_innner}>
                        <b>
                          {val?.quantity} x {val?.name}
                        </b>
                        <p>PKR {productCost}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p style={{ alignSelf: "flex-end", paddingRight: "15px" }}>
                Amount: <b> PKR {totalCost}</b>
              </p>
            </div>
          )
        })
      ) : (
        <div className={styles.review_card}>
          <div className={styles.review_sub_view}>
            <h4 style={{ color: "grey" }}>No Orders.</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
