import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import mountain from "../assets/mountain.jpeg";
import forests from "../assets/forests.jpeg";
import lake from "../assets/lake.jpeg";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Popular Homestays */}
      <section
        style={{
          backgroundColor: "#f7f7f7",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#222",
            marginBottom: "40px",
          }}
        >
          Popular Homestays
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Card
            title="Mountain View Homestay"
            image={mountain}
          />

          <Card
            title="Forest Retreat"
            image={forests}
          />

          <Card
            title="Lakeside Paradise"
            image={lake}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            color: "#222",
          }}
        >
          Why Choose HomeStay Connect?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            fontSize: "1.2rem",
          }}
        >
          <div>✅ Carefully Selected Homestays</div>
          <div>🌿 Unique Nature Experiences</div>
          <div>🔒 Safe & Easy Booking</div>
          <div>💬 Dedicated Customer Assistance</div>
        </div>
      </section>

      {/* Amenities */}
      <section
        style={{
          backgroundColor: "#f7f7f7",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            color: "#222",
          }}
        >
          Featured Amenities
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            fontSize: "1.2rem",
          }}
        >
          <div>📶 High-Speed Wi-Fi</div>
          <div>🚗 Free Parking</div>
          <div>🍽️ Local Cuisine</div>
          <div>🔥 Bonfire Evenings</div>
          <div>🏞️ Scenic Views</div>
          <div>🐶 Pet Friendly</div>
        </div>
      </section>

      {/* Reviews */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
            color: "#222",
          }}
        >
          Guest Experiences
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              "The mountain sunrise view was absolutely stunning and peaceful."
            </p>
            <strong>— Verified Traveler</strong>
          </div>

          <div
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              "Booking was simple, and the homestay felt warm and welcoming."
            </p>
            <strong>— Verified Traveler</strong>
          </div>

          <div
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>
              "A perfect weekend getaway surrounded by nature and fresh air."
            </p>
            <strong>— Verified Traveler</strong>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section
        style={{
          backgroundColor: "#14213d",
          color: "white",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "70px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div>
            <h2>120+</h2>
            <p>Homestays</p>
          </div>

          <div>
            <h2>1,500+</h2>
            <p>Happy Guests</p>
          </div>

          <div>
            <h2>30+</h2>
            <p>Locations</p>
          </div>

          <div>
            <h2>4.8⭐</h2>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;