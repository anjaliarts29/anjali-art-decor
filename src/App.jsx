import React from "react";

export default function App() {
  const whatsappNumber = "10000000000"; // change to your number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Anjali Art Decor</h1>
        <p>
          Art Classes • Mandala • Lippan Art • Event Decoration (Frisco / Dallas)
        </p>
        <a href={whatsappLink}>
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Book Now
          </button>
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Mandala Art Classes</li>
          <li>Drawing & Painting</li>
          <li>Lippan Art</li>
          <li>Birthday & Event Decoration</li>
        </ul>
      </section>

      {/* PACKAGES */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Event Packages</h2>
        <ul>
          <li>Basic Setup – $150+</li>
          <li>Premium Theme – $300+</li>
          <li>Custom Artistic Decor – Custom Pricing</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>
        <p>Phone: +1 (000) 000-0000</p>
        <p>Email: hello@anjaliartdecor.com</p>
        <p>Location: Frisco / Dallas Area</p>
        <a href={whatsappLink}>
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            WhatsApp Now
          </button>
        </a>
      </section>

    </div>
  );
}
