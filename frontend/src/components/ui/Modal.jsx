/**
 * Modal Component
 * Displays booking confirmation information
 */

function Modal() {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <h3>Booking Confirmation</h3>

      <p>Your homestay booking is successful.</p>
    </div>
  );
}

export default Modal;