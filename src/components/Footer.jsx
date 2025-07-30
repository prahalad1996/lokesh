import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12" style={{ paddingTop: '50px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-gradient">Embrodera</span>
            <p className="text-white/80 text-sm">
              Bring your designs to life with custom t-shirt embroidery. Perfect for brands, events, and personal style.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSocialClick}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4 text-white" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Quick Links</span>
            <div className="space-y-2">
              {['Home', 'About Us', 'Contact', 'Career'].map((link) => (
                <p key={link} className="text-white/80 hover:text-white cursor-pointer transition-colors text-sm">
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Services</span>
            <div className="space-y-2">
              {['Custom Logo T-Shirts', 'Personalized Designs', 'Bulk Orders', 'Event Merchandise'].map((product) => (
                <p key={product} className="text-white/80 hover:text-white cursor-pointer transition-colors text-sm">
                  {product}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-300" />
                <span className="text-white/80 text-sm">+91 91133 02667</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-300" />
                <span className="text-white/80 text-sm">info@embrodera.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-300" />
                <span className="text-white/80 text-sm">Indore, MadhyaPradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Embrodera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;