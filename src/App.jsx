import React from "react";

export default function App() {
  const whatsappNumber = "10000000000"; // replace
  const instagramUrl = "https://instagram.com/anjaliartdecor";
  const facebookUrl = "https://facebook.com/anjaliartdecor";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=Hi%20I%20want%20to%20book%20art%20class%20or%20decoration`;

  const services = [
    "Mandala Art Classes",
    "Drawing & Painting",
    "Lippan Art",
    "Kids Art & Craft",
    "Birthday Decoration",
    "Graduation & Event Decor"
  ];

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <h2>Anjali Art Decor</h2>

        <nav>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerBtn" href={whatsappLink}>Book Now</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Art Classes & Event Decoration</h1>
          <p>Mandala • Painting • Lippan Art • Birthday & Party Decor</p>

          <a className="btn primary" href={whatsappLink}>
            WhatsApp Booking
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="grid">
          {services.map((s, i) => (
            <div key={i} className="card">{s}</div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section">
        <h2>Gallery</h2>

        <div className="gallery">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="galleryItem">Image {i}</div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Frisco / Dallas Area</p>
        <p>Phone: +1 (000) 000-0000</p>
        <p>Email: hello@anjaliartdecor.com</p>
      </section>

      {/* FLOATING SOCIAL ICONS */}
      <div className="floatingSocials">

        <a className="floatIcon whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          W
        </a>

        <a className="floatIcon instagram" href={instagramUrl} target="_blank" rel="noreferrer">
          I
        </a>

        <a className="floatIcon facebook" href={facebookUrl} target="_blank" rel="noreferrer">
          F
        </a>

      </div>

      {/* FOOTER */}
      <footer>
        © 2026 Anjali Art Decor
      </footer>

    </div>
  );
}
