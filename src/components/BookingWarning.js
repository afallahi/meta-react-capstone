import ReactModal from "react-modal";

const BookingWarning = (props) => (
  <ReactModal
    isOpen={props.openState}
    contentLabel="Booking Form field warnings"
    className='myWarningModal'
    overlayClassName='myWarningOverlay'
    appElement={props.appElement}
  >
    <h2>Warnings</h2>
    <ul>
      {(props.warnings.map((warning) => (
        <li key={warning.key}>{warning.text}</li>
      )))}
    </ul>
    <button id="okBtn" onClick={props.cancel}>OK</button>
  </ReactModal>
);

export default BookingWarning;