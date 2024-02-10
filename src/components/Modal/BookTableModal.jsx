import { Modal, DatePicker } from "antd";
import styles from "./BookTableModal.module.css";
import { MdTableRestaurant } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

const BookTableModal = (props) => {
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
    props.onChangeDate(dateString);
  };

  const onPressSelectTable = (item) => {
    props.onSelectSeats(item.name);
  };

  return (
    <Modal
      title="Book a Table"
      centered
      open={props.visible}
      onOk={props?.onSubmit}
      onCancel={props?.onClose}
      okText={
        props.loading ? <Spinner animation="border" size="sm" /> : "Book Now"
      }
      cancelText={false}
      okButtonProps={{ style: { backgroundColor: "rgba(254,4,60, 0.9)" } }}
    >
      <div className={styles.modal_content_view}>
        <DatePicker name="date" onChange={onChangeDate} />

        <div className={styles.modalOptions_view}>
          {bookOptions.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  props?.data?.no_of_seats == item?.name
                    ? "rgba(254,4,60, 0.9)"
                    : "white",
              }}
              className={styles.modal_text}
              onClick={() => onPressSelectTable(item)}
            >
              <MdTableRestaurant
                color={
                  props?.data?.no_of_seats == item?.name
                    ? "white"
                    : "rgba(254,4,60, 0.9)"
                }
                size={25}
              />
              <text
                style={{
                  color:
                    props?.data?.no_of_seats == item?.name ? "white" : "black",
                  textAlign: "center",
                }}
              >
                {item?.name} seaters
              </text>
            </div>
          ))}
        </div>

        <input
          className={styles.inputx}
          onChange={props.onChange}
          type="time"
          id={styles.timepickerFrom}
          name="time"
        />
        <input
          className={styles.inputx}
          onChange={props.onChange}
          type="time"
          id={styles.timepickerTo}
          name="time"
        />
        <input
          placeholder="Enter your name"
          className={styles.inputx}
          onChange={props.onChange}
          type="text"
          name="name"
        />
        <input
          placeholder="Enter contact no."
          className={styles.inputx}
          onChange={props.onChange}
          type="number"
          name="phone"
        />
        <input
          placeholder="Any additional information (optional)"
          className={styles.input}
          onChange={props.onChange}
          type="text"
          name="additional_info"
        />
      </div>
    </Modal>
  );
};
export default BookTableModal;
