import "./modal.scss";

const Modal = (props) => {
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="item">
              <p>Name</p>
              <p>price</p>
            </div>
            <div className="item">
              <span>total amount</span>
              <span>price</span>
            </div>
            <button className="button-modal" onClick={props.onClose}>
              Close
            </button>
            <button className="button-modal">Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
