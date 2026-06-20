/**
 * Toast Component
 * Displays success notification
 */

function Toast() {
  return (
    <div
      style={{
        backgroundColor: "#4caf50",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        textAlign: "center",
        fontWeight: "600",
      }}
    >
      Booking Successful!
    </div>
  );
}

export default Toast;