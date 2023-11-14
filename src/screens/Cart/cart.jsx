import { Input } from "antd"
import React, { useEffect, useState } from "react"
import styles from "./Cart.module.css"
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"
import SuccessModal from "../../components/Modal/SuccessModal"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CartActions from "../../redux/Actions/CartActions"

export default function Cart() {
  const [Modal, setModal] = useState(false)
  const [totalCost, setTotalCost] = useState(0)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state?.CartReducer)

  const onPressPlaceOrder = () => {
    setModal(true)
  }

  const removeFromCart = (id) => {
    dispatch(CartActions.removeFromCart(id))
  }

  useEffect(() => {
    const updatedTotalCost = cartItems?.reduce((total, item) => {
      return total + item?.price
    }, 0)
    setTotalCost(updatedTotalCost)
  }, [cartItems])

  return (
    <div className={styles.container}>
      <div className={styles.div_one}>
        <h2>Shopping Cart</h2>

        <div className={styles.total_text_view}>
          <text>Total Cost</text>
          <text>
            <b> $ {totalCost} </b>
          </text>
        </div>

        <h5>Order Details</h5>
        <Input
          placeholder="Address"
          bordered={false}
          className={styles.input}
        />
        <Input
          placeholder="Contact Number"
          bordered={false}
          className={styles.input}
        />

        <button className={styles.main_button} onClick={onPressPlaceOrder}>
          Place Order
        </button>
      </div>

      <div className={styles.div_two}>
        {cartItems?.length ? (
          cartItems?.map((item, index) => (
            <div key={index} className={styles.product_card}>
              <img src={item?.image} className={styles.product_image} />
              <div className={styles.card_text_view}>
                <text>
                  <b> {item?.name}</b>
                </text>
                <text>$ {item?.price}</text>
              </div>
              <div className={styles.counter_view}>
                <AiOutlineMinusSquare size={20} color={"black"} />
                <text className={styles.quantity}>1</text>
                <AiOutlinePlusSquare size={20} color={"black"} />
              </div>
              <RxCross2
                color={"black"}
                size={18}
                onClick={() => removeFromCart(item?._id)}
              />
            </div>
          ))
        ) : (
          <div className={styles.review_card}>
            <div className={styles.review_sub_view}>
              <h4 style={{ color: "grey" }}>Cart is empty.</h4>
            </div>
          </div>
        )}
      </div>

      <SuccessModal
        visible={Modal}
        onOk={() => {
          navigate("/")
        }}
      />
    </div>
  )
}
