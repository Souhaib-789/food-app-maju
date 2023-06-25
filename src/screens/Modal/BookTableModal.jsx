import {  Modal, DatePicker } from 'antd';
import styles from './ReviewModal.module.css'

const BookTableModal = (props) => {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    
      <Modal
        title="Book a Table"
        centered
        open={props.visible}
        onOk={props?.onSubmit}
        onCancel={props?.onClose}
        okText={'Submit Review'}
        cancelText={false}
      >
        <div className={styles.modal_content_view}>
        <DatePicker onChange={onChange} />

        <input placeholder='Enter your name' className={styles.inputx} value={props?.name} onChange={props?.onChangeName} />
        <input placeholder='Any additional' className={styles.input} value={props?.statement} onChange={props?.onChangeStatement} />
        </div>
      </Modal>

  );
};
export default BookTableModal;