import ChatBot from "./ChatBot";
import mandalaImage from "./assets/mandala-new.jpg";
import lippanImage from "./assets/lippan-art.jpg";
import diwaliImage from "./assets/diwali.jpg";
import ganpatiImage from "./assets/ganpati.jpg";
import birthdayImage from "./assets/birthday.jpg";
import kidsImage from "./assets/kids.jpg";
import logoIcon from "./assets/logo-icon.png";

import logo from "./assets/logo.png";
import React from "react";

export default function App() {
  const whatsappNumber = "19725890808"; // replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Anjali%20Art%20Decor,%20I%20want%20to%20inquire%20about%20art%20classes%20or%20event%20decoration.`;
     <a
      href={whatsappLink}
      className="floatingWhatsapp"
      target="_blank"
      rel="noreferrer"
      >
      <img
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
      alt="WhatsApp"
      />
    </a>
  
  return (
    <div className="site">
      <header className="header">
        <div className="brandLogo">
          <img src={logoIcon} alt="Anjali Art Decor Studio" />
        </div>
        <nav>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a
              href="https://instagram.com/souldotby_anjali"
              target="_blank"
              rel="noreferrer"
              className="menuIcon"
            >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
            </a>
            <a
              href="https://facebook.com/anjaliartdecor"
              target="_blank"
              rel="noreferrer"
              className="menuIcon"
              >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
            />
            </a>
            <a
              href="https://pinterest.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="menuIcon"
              >
              <img
              src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
              alt="Pinterest"
              />
            </a>
        </nav>
      </header>
      <section className="hero">
        <div>
          <p className="eyebrow">
            FRISCO • DALLAS • PLANO • MCKINNEY
          </p>
        
          <h1>
  Create, Decorate & Celebrate with Handmade Art
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
          <a
            className="whatsappBtn"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            >
            <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            />
            WhatsApp Now
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
              { title: "Mandala Art Work", img: mandalaImage },
              { title: "Lippan Art Work", img: lippanImage },
              { title: "Diwali & Rangoli Decor", img: diwaliImage },
              { title: "Festive Decoration", img: ganpatiImage },
              { title: "Birthday Decoration", img: birthdayImage },
              { title: "Kids & Adult Art Workshop", img: kidsImage }
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
  <div className="contactContent">
    <p className="eyebrow light">Contact</p>
    <h2>Book Your Class or Event</h2>
    <p>Serving Frisco, Dallas, Plano, McKinney and nearby areas.</p>

    <div className="contactDetails">
      <p><b>Phone:</b> +1 (972) 589-0808</p>
      <p><b>Email:</b> hello@anjaliartdecor.com</p>
    </div>
  </div>

  <div className="contactActions">
    <a className="whatsappBtn" href={whatsappLink} target="_blank" rel="noreferrer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
      WhatsApp Now
    </a>
    <form
        className="contactForm"
        action="https://formspree.io/f/xnjwzdlg"
        method="POST"
        >
        <input name="name" placeholder="Your Name" required />
        <input name="contact" placeholder="Phone or Email" required />
        <select name="service" required>
        <option value="">Interested In</option>
        <option>Art Classes</option>
        <option>Lippan Art</option>
        <option>Birthday Decoration</option>
        <option>Graduation Decoration</option>
        <option>Custom Artwork</option>
        </select>
        <input name="eventDate" type="date" />
        <textarea name="message" placeholder="Tell us about your requirement" />
        <button type="submit">Send Inquiry</button>
    </form>
    <div className="socialLinks">
      <a href="https://instagram.com/anjaliartdecor" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
      </a>
      <a href="https://facebook.com/anjaliartdecor" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
      </a>
      <a
      href="https://pinterest.com/yourprofile"
      target="_blank"
      rel="noreferrer"
      >
      <img
      src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
      alt="Pinterest"
      />
      </a>
    </div>
  </div>
</section>

      <footer>
        © 2026 Anjali Art Decor • Art Classes • Crafts • Event Decoration
      </footer>
      <ChatBot />
    </div>
  
  );
}
export default App;
