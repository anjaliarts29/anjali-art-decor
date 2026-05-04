import React from "react";

export default function App() {
  const whatsappNumber = "10000000000"; // replace with your number, example: 12145551234
  const instagramUrl = "https://instagram.com/anjaliartdecor";
  const facebookUrl = "https://facebook.com/anjaliartdecor";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=Hi%20Anjali%20Art%20Decor,%20I%20want%20to%20inquire%20about%20art%20classes%20or%20event%20decoration.`;

  const services = [
    ["Mandala Art Classes", "Relaxing mandala patterns, dot art, and detailed creative designs."],
    ["Drawing & Painting", "Sketching, acrylic painting, canvas art, and color basics."],
    ["Lippan Art", "Traditional mirror-work wall décor and handmade home art pieces."],
    ["Kids Art & Craft", "Creative workshops for kids, festive crafts, and hobby learners."],
    ["Birthday Decoration", "Beautiful home birthday setups, balloons, backdrop, and theme décor."],
    ["Graduation & Small Events", "Elegant decoration for graduation, small parties, and celebrations."]
  ];

  const packages = [
    ["Basic Decor", "$150+", "Simple setup with backdrop, balloons, and table styling."],
    ["Premium Theme", "$300+", "Theme décor with props, balloon arch, name board, and styling."],
    ["Custom Artistic Decor", "Custom", "Mandala, Lippan, handmade crafts, and personalized event design."]
  ];

  const gallery = [
    "Mandala Artwork",
    "Lippan Wall Decor",
    "Canvas Painting",
    "Kids Craft Class",
    "Birthday Setup",
    "Graduation Decor"
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <h2>Anjali Art Decor</h2>
            <p>Art • Crafts • Event Decoration</p>
          </div>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
        </nav>

        <a className="headerBtn" href={whatsappLink}>Book Now</a>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Serving Frisco • Dallas • Plano • McKinney</p>
          <h1>Art Classes, Handmade Crafts & Elegant Event Decoration</h1>
          <p className="heroText">
            Premium Mandala art, painting, Lippan art, kids craft workshops,
            birthday decoration, graduation setups, and small party styling.
          </p>

          <div className="buttons">
            <a className="btn primary" href={whatsappLink}>Book on WhatsApp</a>
            <a className="btn secondary" href="#services">Explore Services</a>
          </div>

          <div className="stats">
            <div><b>Art</b><span>Classes</span></div>
            <div><b>Craft</b><span>Workshops</span></div>
            <div><b>Event</b><span>Decor</span></div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="mandala">✺</div>
          <h3>Creative Art + Decor Studio</h3>
          <p>Handmade themes for learning, celebrations, and special memories.</p>
        </div>
      </section>

      <section className="section intro">
        <p className="eyebrow">Why Choose Us</p>
        <h2>More than art classes. More than decoration.</h2>
        <p>
          Anjali Art Decor combines creative teaching, cultural handmade art,
          and beautiful small-event styling so every class and celebration feels
          personal, artistic, and memorable.
        </p>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">What We Offer</p>
        <h2>Our Services</h2>
        <div className="grid">
          {services.map(([title, desc]) => (
            <div className="card" key={title}>
              <div className="icon">✦</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section highlight" id="packages">
        <p className="eyebrow">Event Styling</p>
        <h2>Decoration Packages</h2>
        <div className="grid three">
          {packages.map(([title, price, desc]) => (
            <div className="priceCard" key={title}>
              <h3>{title}</h3>
              <h4>{price}</h4>
              <p>{desc}</p>
              <a href={whatsappLink}>Ask for availability →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <p className="eyebrow">Gallery Preview</p>
        <h2>Artwork & Event Ideas</h2>
        <div className="gallery">
          {gallery.map((item) => (
            <div className="galleryItem" key={item}>
              <div className="placeholder">✦</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="galleryNote">
          Replace these placeholders with your real Mandala, Lippan, painting,
          birthday, and graduation decoration photos.
        </p>
      </section>

      <section className="section testimonials">
        <p className="eyebrow">Trust</p>
        <h2>Perfect for families, kids, beginners & small events</h2>
        <div className="testimonialGrid">
          <div>“Creative, patient, and very professional.”</div>
          <div>“Beautiful handmade decoration and unique themes.”</div>
          <div>“Great for kids’ art classes and weekend workshops.”</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light">Contact</p>
          <h2>Book Your Class or Event</h2>
          <p>Serving Frisco, Dallas, Plano, McKinney and nearby areas.</p>
          <p><b>Phone:</b> +1 (000) 000-0000</p>
          <p><b>Email:</b> hello@anjaliartdecor.com</p>

          <div className="socialLinks">
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        <div className="contactBox">
          <h3>Quick Inquiry</h3>
          <p>Name • Service • Event Date • Location</p>
          <a className="btn primary" href={whatsappLink}>Send Inquiry on WhatsApp</a>
        </div>
      </section>

      <a className="floatingWhatsapp" href={whatsappLink}>WhatsApp</a>

      <footer>
        © 2026 Anjali Art Decor • Art Classes • Crafts • Event Decoration
      </footer>
    </div>
  );
}
