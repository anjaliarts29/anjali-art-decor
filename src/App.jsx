import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Brush, Sparkles, Palette, Star, Phone, Mail, MapPin } from "lucide-react";

const phoneNumber = '10000000000'; // Change to your WhatsApp number with country code, example: 12145551234
const whatsappMessage = encodeURIComponent('Hi Anjali Art Decor, I want to inquire about art classes or event decoration.');
const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const services = [
  { icon: Flower2, title: 'Mandala Art', desc: 'Relaxing mandala designs, patterns, dot art, and detailed creative practice.' },
  { icon: Brush, title: 'Drawing & Painting', desc: 'Beginner-friendly sketching, acrylic painting, canvas painting, and color basics.' },
  { icon: Sparkles, title: 'Lippan Art', desc: 'Traditional mirror-work wall décor and handmade home art projects.' },
  { icon: Palette, title: 'Art & Craft Classes', desc: 'Creative craft activities for kids, adults, festive projects, and workshops.' },
  { icon: CalendarDays, title: 'Event Decoration', desc: 'Birthday, graduation, small party, and festive decoration with handmade creative themes.' },
];

const packages = [
  { title: 'Basic Decor', price: '$150+', desc: 'Simple home birthday setup, balloon styling, backdrop, and table decoration.' },
  { title: 'Premium Theme', price: '$300+', desc: 'Theme-based setup with props, personalized board, balloon arch, and detailed styling.' },
  { title: 'Custom Artistic Decor', price: 'Custom', desc: 'Mandala, Lippan, handmade crafts, festive décor, and fully personalized event styling.' },
];

const gallery = ['Mandala Artwork', 'Lippan Wall Décor', 'Canvas Painting', 'Birthday Setup', 'Graduation Decor', 'Kids Craft Workshop'];

function Button({ children, variant = 'primary', href }) {
  const className = variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary';
  if (href) return <a className={className} href={href}>{children}</a>;
  return <button className={className}>{children}</button>;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="nav">
          <a className="brand" href="#home">
            <span className="brandIcon"><Flower2 size={24} /></span>
            <span>
              <strong>Anjali Art Decor</strong>
              <small>Art • Crafts • Event Decoration</small>
            </span>
          </a>
          <nav className="links">
            <a href="#services">Services</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button href={whatsappLink}>Book Now</Button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroBg heroBgOne" />
          <div className="heroBg heroBgTwo" />
          <motion.div className="heroText" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">Serving Frisco, Dallas, Plano & McKinney</p>
            <h1>Art Classes, Handmade Crafts & Creative Event Decoration</h1>
            <p className="heroDescription">
              Mandala art, drawing, painting, Lippan art, kids craft workshops, birthday decoration, graduation party setup, and custom handmade décor.
            </p>
            <div className="heroActions">
              <Button href={whatsappLink}>WhatsApp / Book Now <ArrowRight size={18} /></Button>
              <Button variant="outline" href="#services">View Services</Button>
            </div>
          </motion.div>
          <motion.div className="mandalaCard" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="mandalaOuter">
              <div className="mandalaMiddle">
                <div className="mandalaInner">
                  {[...Array(16)].map((_, i) => <span key={i} style={{ transform: `rotate(${i * 22.5}deg) translateX(34px)` }} />)}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="why">
          <div className="sectionTitle">
            <p className="eyebrow">Why Choose Us</p>
            <h2>A unique blend of art education and creative decoration</h2>
          </div>
          <div className="whyGrid">
            <Card><Flower2 /><h3>Art + Decor Combined</h3><p>One creative studio for classes, crafts, custom artwork, and event decoration.</p></Card>
            <Card><Brush /><h3>Beginner Friendly</h3><p>Step-by-step teaching for kids, adults, beginners, and hobby learners.</p></Card>
            <Card><Sparkles /><h3>Handmade Themes</h3><p>Mandala, Lippan, and craft-based decor themes that feel more personal than generic setups.</p></Card>
          </div>
        </section>

        <section id="services" className="section">
          <div className="sectionTitle">
            <p className="eyebrow">Services</p>
            <h2>Classes, workshops and decoration services</h2>
          </div>
          <div className="serviceGrid">
            {services.map((item) => {
              const Icon = item.icon;
              return <Card key={item.title}><Icon /><h3>{item.title}</h3><p>{item.desc}</p></Card>;
            })}
          </div>
        </section>

        <section id="events" className="section soft">
          <div className="sectionTitle">
            <p className="eyebrow">Event Decoration</p>
            <h2>Birthday, graduation and small party decor packages</h2>
          </div>
          <div className="packageGrid">
            {packages.map((item) => <Card key={item.title}><h3>{item.title}</h3><strong>{item.price}</strong><p>{item.desc}</p></Card>)}
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="sectionTitle">
            <p className="eyebrow">Gallery</p>
            <h2>Replace these placeholders with your real photos</h2>
          </div>
          <div className="galleryGrid">
            {gallery.map((item) => <div className="galleryItem" key={item}><div className="photoPlaceholder"><Palette size={40} /></div><h3>{item}</h3></div>)}
          </div>
        </section>

        <section className="testimonial">
          <div>
            <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
            <h2>Trusted by families and creative learners</h2>
            <p>“Amazing art classes and beautiful decoration ideas. Very professional, creative, and friendly service.”</p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contactInfo">
            <p className="eyebrow light">Contact</p>
            <h2>Book your class, workshop or event decoration</h2>
            <p>Share your class requirement, event date, theme, location, or custom artwork idea.</p>
            <div className="contactRows">
              <p><Phone size={18} /> +1 (000) 000-0000</p>
              <p><Mail size={18} /> hello@anjaliartdecor.com</p>
              <p><MapPin size={18} /> Frisco / Dallas Area, Texas</p>
              <p><Star size={18} /> @anjaliartdecor</p>
            </div>
            <Button href={whatsappLink}>WhatsApp Now</Button>
          </div>
          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your Name" />
            <input placeholder="Phone / Email" />
            <select defaultValue="">
              <option value="" disabled>Interested In</option>
              <option>Mandala Art Class</option>
              <option>Drawing & Painting Class</option>
              <option>Lippan Art Workshop</option>
              <option>Birthday Decoration</option>
              <option>Graduation / Small Party Decoration</option>
              <option>Custom Artwork</option>
            </select>
            <textarea placeholder="Tell us about your requirement" />
            <Button>Submit Inquiry</Button>
            <small>This demo form does not send email yet. Connect Formspree, Google Forms, or Netlify Forms later.</small>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Anjali Art Decor. All rights reserved.</p>
        <p>Art Classes • Crafts • Event Decoration</p>
      </footer>
    </div>
  );
}
