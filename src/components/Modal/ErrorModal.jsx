import { Modal } from "antd";
import error from "../../assets/error.png";

const ErrorModal = (props) => {
  return (
    <Modal
      title={props?.title ? props?.title : "Something went wrong!"}
      centereds
      open={props?.visible}
      onOk={props?.onOk}
      onCancel={false}
      closable={false}
      okText={"Ok"}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { backgroundColor: "rgba(254,4,60, 0.9)" } }}
      cancelText={false}
    >
      <div style={{ textAlign: "center", margin: "5%" }}>
        <img src={error} alt="error-img" height={70} />
      </div>
    </Modal>
  );
};
export default ErrorModal;
