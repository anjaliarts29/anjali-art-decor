import logo from "./assets/logo.png";
import mandala from "./assets/mandala.jpg";
import lippan from "./assets/lippan.jpg";
import birthday from "./assets/birthday.jpg";
import kids from "./assets/kids.jpg";
import decor from "./assets/decor.jpg";
import React from "react";

export default function App() {
  const whatsappNumber = "10000000000"; // replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Anjali%20Art%20Decor,%20I%20want%20to%20inquire%20about%20art%20classes%20or%20event%20decoration.`;

  return (
    <div className="site">
      <header className="header">
        <h2>Anjali Art Decor</h2>
        <nav>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="https://instagram.com/anjaliartdecor" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com/anjaliartdecor" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">
            FRISCO • DALLAS • PLANO • MCKINNEY
          </p>
        
          <h1 className="luxuryHeading">
            Creative Art + Decor Studio
          </h1>
        
          <p className="heroText">
            Handmade creativity, elegant decor, artistic workshops and memorable celebrations crafted beautifully.
          </p>
        
          <div className="featureIcons">
        
            <div className="featureItem">
              <div className="featureEmoji">🎨</div>
              <h4>Art Classes</h4>
              <p>All ages</p>
            </div>
        
            <div className="featureItem">
              <div className="featureEmoji">🪷</div>
              <h4>Handmade Crafts</h4>
              <p>Unique & Artistic</p>
            </div>
        
            <div className="featureItem">
              <div className="featureEmoji">🎈</div>
              <h4>Event Decoration</h4>
              <p>Memorable Moments</p>
            </div>
        
            <div className="featureItem">
              <div className="featureEmoji">🎁</div>
              <h4>Custom Artwork</h4>
              <p>Personalized for You</p>
            </div>
        
          </div>
        
          <div className="buttons">
            <a className="btn primary" href={whatsappLink}>
              Book on WhatsApp
            </a>
        
            <a className="btn secondary" href="#services">
              View Services
            </a>
          </div>
        </div>
        <div className="heroCard fullImageCard">
          <img src={logo} alt="Creative Art Decor Studio" className="fullHeroImage" />
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">What We Offer</p>
        <h2>Services</h2>
        <div className="grid">
          {[
            ["🎨", "Mandala Art", "Relaxing patterns, dot art, and detailed creative designs."],
            ["🖌️", "Drawing & Painting", "Beginner-friendly sketching, acrylics, canvas painting, and color basics."],
            ["✨", "Lippan Art", "Traditional mirror-work wall décor and handmade home art pieces."],
            ["✂️", "Art & Craft Classes", "Creative workshops for kids, adults, festive crafts, and hobby learners."],
            ["🎈", "Event Decoration", "Birthday, graduation, small party, and festive decoration with handmade themes."],
            ["🖼️", "Custom Artwork", "Personalized art and décor pieces for gifts, homes, and events."]
          ].map(([icon, title, desc]) => (
            <div className="card" key={title}>
              <div className="serviceIcon">{icon}</div>
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
          {[
            ["Basic Decor", "$150+", "Simple home birthday setup, balloons, backdrop, and table styling."],
            ["Premium Theme", "$300+", "Theme setup with props, name board, balloon arch, and detailed styling."],
            ["Custom Artistic Decor", "Custom", "Mandala, Lippan, handmade crafts, festive décor, and personalized event design."]
          ].map(([title, price, desc]) => (
            <div className="priceCard" key={title}>
              <h3>{title}</h3>
              <h4>{price}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <p className="eyebrow">Gallery Preview</p>
        <h2>Artwork & Event Ideas</h2>
        <div className="gallery">
  {[
    {
      title: "Mandala Artwork",
      img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
    },
    {
      title: "Lippan Wall Decor",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      title: "Canvas Painting",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
    },
    {
      title: "Birthday Setup",
      img: "https://images.unsplash.com/photo-1543728069-a3f97c5a2f32"
    },
    {
      title: "Graduation Decor",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
    },
    {
      title: "Kids Craft Workshop",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350"
    }
  ].map((item) => (
    <div className="galleryItem" key={item.title}>
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </div>
  ))}
</div>
      </section>

      <section className="section why">
        <p className="eyebrow">Why Choose Us</p>
        <h2>More than decoration. More than art classes.</h2>
        <p>
          Anjali Art Decor combines creative teaching, handmade crafts, cultural art styles,
          and beautiful small-event styling—making your learning and celebrations feel personal,
          artistic, and memorable.
        </p>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light">Contact</p>
          <h2>Book Your Class or Event</h2>
          <p>Serving Frisco, Dallas, Plano, McKinney and nearby areas.</p>
          <p><b>Phone:</b> +1 (000) 000-0000</p>
          <p><b>Email:</b> hello@anjaliartdecor.com</p>
        </div>
        <a className="btn white" href={whatsappLink}>WhatsApp Now</a>
        <div className="socialLinks">
          <a href="https://instagram.com/anjaliartdecor" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
        
          <a href="https://facebook.com/anjaliartdecor" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
      </div>
      </section>

      <footer>
        © 2026 Anjali Art Decor • Art Classes • Crafts • Event Decoration
      </footer>
    </div>
  );
}
