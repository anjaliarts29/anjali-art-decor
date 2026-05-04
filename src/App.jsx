import React from "react";

export default function App() {
  const whatsappNumber = "10000000000"; // replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi I want to book art class or decoration`;

  const instagramUrl = "https://instagram.com/anjaliartdecor";
  const facebookUrl = "https://facebook.com/anjaliartdecor";

  const services = [
    "Mandala Art Classes",
    "Drawing & Painting",
    "Lippan Art",
    "Kids Art & Craft",
    "Birthday Decoration",
    "Graduation & Event Decor"
  ];

  const packages = [
    ["Basic Decor", "$150+", "Simple setup with balloons & backdrop"],
    ["Premium Theme", "$300+", "Theme decor + name board + styling"],
    ["Custom Decor", "Custom", "Mandala / Lippan artistic decor"]
  ];

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <h2>Anjali Art Decor</h2>

        <nav>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerBtn" href={whatsappLink}>Book Now</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Art Classes & Event Decoration</h1>
        <p>Mandala • Painting • Lippan Art • Birthday & Party Decor</p>
        <a className="btn primary" href={whatsappLink}>WhatsApp Booking</a>
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

      {/* PACKAGES */}
      <section id="packages" className="section">
        <h2>Event Packages</h2>

        <div className="grid">
          {packages.map((p, i) => (
            <div key={i} className="card">
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <p>{p[2]}</p>
            </div>
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

      {/* TESTIMONIAL */}
      <section className="section">
        <h2>What Clients Say</h2>
        <p>“Beautiful decoration and creative art classes. Highly recommended!”</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Frisco / Dallas Area</p>
        <p>Phone: +1 (000) 000-0000</p>
        <p>Email: hello@anjaliartdecor.com</p>

        <div className="socialLinks">
          <a href={instagramUrl} target="_blank">Instagram</a>
          <a href={facebookUrl} target="_blank">Facebook</a>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="floatingSocials">
        <a className="floatIcon whatsapp" href={whatsappLink}>W</a>
        <a className="floatIcon instagram" href={instagramUrl}>I</a>
        <a className="floatIcon facebook" href={facebookUrl}>F</a>
      </div>

      {/* FOOTER */}
      <footer>
        © 2026 Anjali Art Decor • Art Classes • Event Decoration
      </footer>

    </div>
  );
}
