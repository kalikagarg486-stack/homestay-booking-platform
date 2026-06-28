function Card({ title, image, location, price, description }) {
  return (
    <div
      style={{
        width: "320px",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        margin: "20px",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            color: "#222",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>

        <p><strong>📍 {location}</strong></p>

        <p><strong>₹{price} / night</strong></p>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>

        <button
          style={{
            marginTop: "15px",
            backgroundColor: "#ff6b35",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;