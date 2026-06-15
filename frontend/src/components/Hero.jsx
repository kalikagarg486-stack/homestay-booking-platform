import mountainImage from "../assets/mountains.jpg.jpeg";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${mountainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.45)",
        backgroundBlendMode: "overlay",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "700",
          lineHeight: "1.2",
          marginBottom: "25px",
          textShadow: "3px 3px 15px black",
          maxWidth: "1000px",
        }}
      >
        Find Your Perfect Homestay
      </h1>

      <p
        style={{
          fontSize: "1.7rem",
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          maxWidth: "800px",
          lineHeight: "1.5",
          marginBottom: "40px",
          color: "#f5f5f5",
          textShadow: "2px 2px 8px black",
        }}
      >
        Luxury stays, breathtaking views, and unforgettable experiences.
      </p>

      <button
        style={{
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          padding: "15px 40px",
          borderRadius: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
        }}
      >
        Book Now
      </button>
    </section>
  );
}

export default Hero;