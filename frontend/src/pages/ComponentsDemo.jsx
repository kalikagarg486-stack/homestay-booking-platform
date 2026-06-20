import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function ComponentsDemo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#222",
          fontSize: "45px",
          marginBottom: "10px",
          marginTop: "0",
        }}
      >
        Homestay UI Component Library
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "22px",
          marginBottom: "40px",
          marginTop: "0",
        }}
      >
        Reusable UI Components for Homestay Booking Platform
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Button Component */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Button Component</h3>

          <Button text="Book Now" />
        </div>

        {/* Input Component */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Input Component</h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Input placeholder="Enter Location" />
          </div>
        </div>

        {/* Modal Component */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Modal Component</h3>

          <Modal />
        </div>

        {/* Toast Component */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Toast Component</h3>

          <Toast />
        </div>

        {/* Loader Component */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Loader Component</h3>

          <Loader />
        </div>
      </div>
    </div>
  );
}

export default ComponentsDemo;