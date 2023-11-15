import { Modal, DatePicker } from "antd";
import styles from "./BookTableModal.module.css";
import { MdTableRestaurant } from "react-icons/md";
import { useState } from "react";

const BookTableModal = (props) => {
  const [TableSeaters, setTableSeaters] = useState();

  const bookOptions = [
    {
      id: 1,
      name: "4",
    },
    {
      id: 2,
      name: "8",
    },
    {
      id: 3,
      name: "12",
    },
  ];

  const onChangeDate = (date, dateString) => {
    props?.selectedDate(dateString);
  };

  const onPressSelectTable = (item) => {
    props?.onStateChange(item);
    setTableSeaters(item);
  };

  return (
    <Modal
      title="Book a Table"
      centered
      open={props.visible}
      onOk={props?.onSubmit}
      onCancel={props?.onClose}
      okText={"Book Now"}
      cancelText={false}
      okButtonProps={{ style: { backgroundColor: "rgba(254,4,60, 0.9)" } }}
    >
      <div className={styles.modal_content_view}>
        <DatePicker onChange={onChangeDate} />

        <div className={styles.modalOptions_view}>
          {bookOptions.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  TableSeaters?.name == item?.name
                    ? "rgba(254,4,60, 0.9)"
                    : "white",
              }}
              className={styles.modal_text}
              onClick={() => onPressSelectTable(item)}
            >
              <MdTableRestaurant
                color={
                  TableSeaters?.name == item?.name
                    ? "white"
                    : "rgba(254,4,60, 0.9)"
                }
                size={25}
              />
              <text
                style={{
                  color: TableSeaters?.name == item?.name ? "white" : "black",
                  textAlign: "center",
                }}
              >
                {item?.name} seaters
              </text>
            </div>
          ))}
        </div>

        <input
          placeholder="Enter your name"
          className={styles.inputx}
          value={props?.name}
          onChange={props?.onChangeName}
        />
        <input
          placeholder="Enter contact no."
          className={styles.inputx}
          value={props?.contact}
          onChange={props?.onChangeContact}
        />
        <input
          placeholder="Any additional information"
          className={styles.input}
          value={props?.info}
          onChange={props?.onChangeInfo}
        />
      </div>
    </Modal>
  );
};
export default BookTableModal;
