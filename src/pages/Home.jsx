import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Sparkles, Shirt, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Home = () => {
  const { toast } = useToast();

  const handleQuoteClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Sparkles,
      title: "Intricate Designs",
      description: "Detailed and vibrant embroidery to bring your vision to life."
    },
    {
      icon: Shirt,
      title: "Premium T-Shirts",
      description: "Soft, durable, and comfortable materials for a perfect canvas."
    },
    {
      icon: Truck,
      title: "Fast Turnaround",
      description: "Quick and reliable delivery for all your custom orders."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Embrodera - Custom T-Shirt Embroidery | Home</title>
        <meta name="description" content="Transform your ideas into wearable art with Embrodera. We offer high-quality, custom t-shirt embroidery for individuals, brands, and events." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20"></div>
          
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-yellow-300 font-semibold text-lg tracking-wide"
                >
                  Embrodera
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                >
                  Custom T-Shirt
                  <span className="block text-gradient">Embroidery</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 text-lg max-w-md mx-auto lg:mx-0"
                >
                  Transform your ideas into wearable art. We offer high-quality, custom t-shirt embroidery for individuals, brands, and events.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  className="btn-primary px-8 py-3 text-lg font-semibold rounded-full group"
                >
                  <Link to="/customer-form">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative floating-animation">
                <img 
                  class="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                  alt="T-shirt with a detailed custom embroidery design"
                 src="https://images.unsplash.com/photo-1649878239272-e3a9fd9542ed" />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-30"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-black/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-gradient">Embrodera</span>?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Our commitment to quality and creativity sets us apart.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl glass-effect card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 rounded-3xl glass-effect"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Have a Design in Mind?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get a free quote for your custom embroidery project today.
              </p>
              <Button
                asChild
                className="btn-primary px-12 py-4 text-lg font-semibold rounded-full"
              >
                <Link to="/customer-form">Request a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;