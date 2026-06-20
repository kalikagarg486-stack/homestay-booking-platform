/**
 * Button Component
 * @param {string} text - Button label
 */

function Button({ text }) {
  return (
    <button
      style={{
        padding: "12px 24px",
        backgroundColor: "#ff6b35",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
      }}
    >
      {text}
    </button>
  );
}

export default Button;