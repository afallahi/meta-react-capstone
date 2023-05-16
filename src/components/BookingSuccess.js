import ReactModal from "react-modal";

const BookingSuccess = (props) => {
  return (
    <ReactModal
      isOpen={props.openState}
      contentLabel="Booking Success Alert"
      className='myConfirmModal'
      overlayClassName='myConfirmOverlay'
      appElement={props.appElement}
    >
      <h3>{props.message}</h3>
      <button id="confirmBtn" onClick={props.confirm}>OK</button>
    </ReactModal>
  );
};

export default BookingSuccess;