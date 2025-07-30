import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Career from '@/pages/Career';
import CustomerForm from '@/pages/CustomerForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>Embrodera - Custom T-Shirt Embroidery</title>
          <meta name="description" content="High-quality custom embroidery for t-shirts by Embrodera. Bring your designs to life with our expert craftsmanship." />
        </Helmet>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/customer-form" element={<CustomerForm />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;