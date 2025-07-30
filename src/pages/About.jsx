import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional embroidery services with a focus on quality, creativity, and customer satisfaction."
    },
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "We love what we do, and every stitch reflects our passion for the art of embroidery."
    },
    {
      icon: Award,
      title: "Attention to Detail",
      description: "From thread selection to final inspection, we ensure every detail is perfect."
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "We work closely with you to bring your vision to life exactly as you imagined."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "50K+", label: "T-Shirts Embroidered" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Embrodera Custom T-Shirt Embroidery</title>
        <meta name="description" content="Learn about Embrodera. Our story, our passion for embroidery, and our commitment to quality craftsmanship." />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="text-gradient">Embrodera</span>
              </h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto">
                We are a passionate team of creators dedicated to the art of custom t-shirt embroidery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Embrodera was born from a love for design and craftsmanship. We saw an opportunity to transform simple t-shirts into personalized works of art through the timeless craft of embroidery.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our journey began with a single embroidery machine and a big dream: to make high-quality, custom apparel accessible to everyone. Today, we help brands, teams, and individuals express themselves with every stitch.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We are committed to using the finest threads and premium garments to ensure your designs not only look great but also stand the test of time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img 
                  className="w-full rounded-2xl shadow-2xl"
                  alt="Embrodera team collaborating on a new t-shirt design"
                 src="https://images.unsplash.com/photo-1633655442356-ab2dbc69c772" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-gradient">Impact</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl glass-effect"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                These principles guide every stitch we make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl glass-effect card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-black/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Passionate professionals who create the best products for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Tushar Kumar", role: "Founder & Lead Artist" },
                { name: "priyansh vanjari", role: "Head of Design" },
                { name: "Shivank kumar", role: "Production Manager" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6 rounded-2xl glass-effect card-hover"
                >
                  <img 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    alt={`${member.name} - ${member.role} at Embrodera`}
                   src="img/embrodery photo.jpg" />
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-300 font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;