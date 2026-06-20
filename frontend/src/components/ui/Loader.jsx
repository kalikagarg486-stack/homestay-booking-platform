/**
 * Loader Component
 * Displays loading state
 */

function Loader() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          margin: "auto",
          border: "4px solid #ddd",
          borderTop: "4px solid #ff6b35",
          borderRadius: "50%",
        }}
      ></div>

      <p>Loading...</p>
    </div>
  );
}

export default Loader;