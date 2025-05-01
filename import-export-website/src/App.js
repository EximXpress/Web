import React, { useState } from 'react';
import heroImage from './images/hero.jpg';
import logo from './images/logo.png';
import ship from './images/ship_what_we_do.png';
import exim from './images/export_what_we_do.png';
import patner from './images/patner_what_we_do.jpg';
import agro from './images/agro.png';
import textile from './images/textile.png';
import machine from './images/machine.png';
import spices from './images/spices.png';
import chemical from './images/chemical.jpg';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: quoteForm.name,
          email: quoteForm.email,
          phone: quoteForm.phone,
          message: quoteForm.product
        }),
      });

      if (response.ok) {
        setFormStatus('Quote sent successfully!');
        setQuoteForm({ name: '', email: '', phone: '', product: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus('');
        }, 2000);
      } else {
        setFormStatus('Failed to send quote. Please try again.');
      }
    } catch (error) {
      console.error('Error sending quote:', error);
      setFormStatus('Error sending quote.');
    }
  };

  return (
    <div>
      <style>
        {`
          .nav-link {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            padding: 0.4rem 1rem;
            position: relative;
            z-index: 1;
            transition: color 0.4s ease;
            border-radius: 999px;
            overflow: hidden;
            display: inline-block;
          }

          .nav-link::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scaleX(0);
            width: 100%;
            height: 100%;
            background-color: #00b894;
            z-index: -1;
            transition: transform 0.4s ease;
            border-radius: 999px;
          }

          .nav-link:hover::before {
            transform: translate(-50%, -50%) scaleX(1);
          }

          .nav-link:hover {
            color: white;
          }
        `}
      </style>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>
          <img src={logo} alt="Logo" style={styles.logoImage} />
          EXIMXPRESS
        </div>
        <ul style={styles.navLinks}>
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#who" className="nav-link">Who We Are</a></li>
          <li><a href="#what" className="nav-link">What We Do</a></li>
          <li><a href="#products" className="nav-link">Products</a></li>
          <li><a href="#contact" className="nav-link">Contact Us</a></li>
          <li><button onClick={() => setIsModalOpen(true)} style={styles.navButton}>Request a Quote</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1>Reliable Import-Export Services, Built for Growth</h1>
          <p>Simplifying Import-Export from Mumbai to the World.</p>
          <button onClick={() => setIsModalOpen(true)} style={styles.heroButton}>Request a Quote</button>
        </div>
      </header>

      {/* Who We Are */}
      <section id="who" style={styles.section}>
        <h2>Who We Are</h2>
        <p>
        We're a Mumbai-based company committed to delivering high-quality goods across borders. Whether you're importing trusted global products into India or exporting excellence abroad — we've got you covered. With a strong network of global partners, extensive market knowledge, and a passion for reliability, we ensure smooth, timely, and cost-effective shipments. From sourcing trusted global products to ensuring seamless import and export processes, we offer tailored solutions to meet your needs. At the heart of our service is a commitment to trust, transparency, and long-term partnerships — helping you grow your business, one successful shipment at a time
        </p>
        <img src="https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About Us" style={styles.sectionImage} />
      </section>

      {/* What We Do */}
      <section id="what" style={styles.sectionGray}>
        <h2>What We Do</h2>
        <div style={styles.servicesContainer}>
          <div style={styles.serviceCard}>
            <img src={ship} alt="Export" style={styles.cardImage} />
            <h3>Export Services</h3>
            <p>Exporting goods from India to global destinations.</p>
          </div>
          <div style={styles.serviceCard}>
            <img src={exim} alt="Import" style={styles.cardImage} />
            <h3>Import Services</h3>
            <p>Importing trusted products into India.</p>
          </div>
          <div style={styles.serviceCard}>
            <img src={patner} alt="Support" style={styles.cardImage1} />
            <h3>Trade Partner</h3>
            <p>Guidance for product selection, documentation, and partner matching.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={styles.section}>
        <h2>Products We Deal In</h2>
        <div style={styles.productsContainer}>
          <div style={styles.productBox}>
            <img src={agro} alt="Agro Products" style={styles.productImage} />
            <p>Agro Products</p>
          </div>
          <div style={styles.productBox}>
            <img src={textile} alt="Textiles" style={styles.productImage} />
            <p>Textiles</p>
          </div>
          <div style={styles.productBox}>
            <img src={machine} alt="Machinery" style={styles.productImage} />
            <p>Machinery</p>
          </div>
          <div style={styles.productBox}>
            <img src={spices} alt="Spices" style={styles.productImage} />
            <p>Spices</p>
          </div>
          <div style={styles.productBox}>
            <img src={chemical} alt="Consumer Goods" style={styles.productImage} />
            <p>Chemicals</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" style={styles.sectionGray}>
        <h2>Start Your Trade Journey</h2>
        <p>Phone: +91-9821170392 | WhatsApp: +91-9821170392 | Email: info@eximxpress.com / sales@eximxpress.com</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 EXIMXPRESS All Rights Reserved.</p>
      </footer>

      {/* Modal for Request a Quote */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Request a Quote</h3>
            <form onSubmit={handleFormSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={quoteForm.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={quoteForm.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={quoteForm.phone}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
              <textarea
                name="product"
                placeholder="What product are you interested in?"
                value={quoteForm.product}
                onChange={handleInputChange}
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.modalButton}>Submit</button>
              <button type="button" onClick={() => setIsModalOpen(false)} style={styles.modalButton}>Close</button>
            </form>
            {formStatus && <p style={{ marginTop: '10px', color: 'green' }}>{formStatus}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px', backgroundColor: '#718bab', color: 'white', height: '80px' },
  navLogo: { fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '1rem', alignItems: 'center', margin: 0 },
  navButton: { backgroundColor: '#00b894', color: 'white', padding: '0.5rem 1.5rem', border: 'none', borderRadius: '5px' },
  logoImage: { height: '120px', width: '120px', marginTop:'15px' },

  hero: { height: '90vh', backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', color: 'white' },
  heroOverlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  heroButton: { backgroundColor: '#00b894', color: 'white', padding: '1rem 2rem', fontSize: '1rem', marginTop: '1rem', border: 'none', borderRadius: '5px' },

  section: { padding: '4rem 2rem', textAlign: 'center' },
  sectionGray: { padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f8f9fa' },
  sectionImage: { width: '100%', maxWidth: '800px', marginTop: '2rem', borderRadius: '10px' },

  servicesContainer: { display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' },
  serviceCard: { width: '250px', padding: '1rem', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px' },
  cardImage: { width: '95%', height: '150px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#f9f9f9', padding: '10px' },
  cardImage1: { width: '90%', height: '150px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#f9f9f9', padding: '10px' },

  productsContainer: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' },
  productBox: { width: '150px', height: '180px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' },
  productImage: { width: '100%', height: '120px', objectFit: 'cover' },

  footer: { padding: '2rem', backgroundColor: '#003366', color: 'white', textAlign: 'center', marginTop: '2rem' },

  modalOverlay: { position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '400px' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px' },
  textarea: { padding: '0.8rem', border: '1px solid #ddd', borderRadius: '5px', minHeight: '100px' },
  modalButton: { padding: '0.8rem', backgroundColor: '#00b894', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default App;
