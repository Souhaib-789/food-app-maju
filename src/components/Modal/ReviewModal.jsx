import {  Modal, Rate } from 'antd';
import styles from './ReviewModal.module.css'
const ReviewModal = (props) => {

  return (
    
      <Modal
        title="Add Review to this Restaurant"
        centered
        open={props.visible}
        onOk={props?.onSubmit}
        onCancel={props?.onClose}
        okText={'Submit Review'}
        okButtonProps={{ style: { backgroundColor: 'rgba(254,4,60, 0.9)' } }}
        cancelText={false}
      >
        <div className={styles.modal_content_view}>
        <Rate defaultValue={props?.rating} onChange={props?.onChangeRating} />
        <input placeholder='Enter your name' className={styles.inputx} value={props?.name} onChange={props?.onChangeName} />
        <input placeholder='Enter your review statement' className={styles.input} value={props?.statement} onChange={props?.onChangeStatement} />
        </div>
      </Modal>

  );
};
export default ReviewModal;