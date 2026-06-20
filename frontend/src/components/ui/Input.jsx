/**
 * Input Component
 * @param {string} placeholder - Input placeholder text
 */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "12px",
        width: "280px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "15px",
      }}
    />
  );
}

export default Input;