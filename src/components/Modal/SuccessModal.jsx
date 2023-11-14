import { Modal } from "antd"
import { AiOutlineFileDone } from "react-icons/ai"
const SuccessModal = (props) => {
  return (
    <Modal
      title={
        props?.title ? props?.title : "Your order has been placed successfully!"
      }
      centered
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
        <AiOutlineFileDone size={80} color={"rgba(254,4,60, 0.9)"} />
      </div>
    </Modal>
  )
}
export default SuccessModal
