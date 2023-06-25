import { Modal, DatePicker } from 'antd';
import styles from './BookTableModal.module.css'
import { MdTableRestaurant } from "react-icons/md";
import { useState } from 'react';

const BookTableModal = (props) => {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [TableSeaters , setTableSeaters] = useState()

  const bookOptions = [
    {
      id: 1,
      name: '4'
    },
    {
      id: 2,
      name: '8'
    },
    {
      id: 3,
      name: '12'
    }
  ]

  return (

    <Modal
      title="Book a Table"
      centered
      open={props.visible}
      onOk={props?.onSubmit}
      onCancel={props?.onClose}
      okText={'Book Now'}
      cancelText={false}
    >
      <div className={styles.modal_content_view}>
        <DatePicker onChange={onChange} />

        <div className={styles.modalOptions_view}>
          {bookOptions.map((item, index) =>

            <div style={{backgroundColor: TableSeaters?.name == item?.name  ? 'rgba(254,4,60, 0.9)' : 'white'}} className={styles.modal_text} onClick={()=> setTableSeaters(item)}>
              <MdTableRestaurant color={TableSeaters?.name == item?.name ? 'white' : 'rgba(254,4,60, 0.9)'} size={25} />
              <text style={{color: TableSeaters?.name == item?.name ? 'white' : 'black'}}>{item?.name} seaters</text>
            </div>
          )}
        </div>

        <input placeholder='Enter your name' className={styles.inputx} value={props?.name} onChange={props?.onChangeName} />
        <input placeholder='Any additional information' className={styles.input} value={props?.statement} onChange={props?.onChangeStatement} />
      </div>
    </Modal>

  );
};
export default BookTableModal;