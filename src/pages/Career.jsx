import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Career = () => {
  const { toast } = useToast();

  const handleApplyClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Best salary packages in the industry."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Complete health insurance coverage."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Career advancement and skill development."
    },
    {
      icon: Users,
      title: "Creative Culture",
      description: "Collaborative and supportive work environment."
    }
  ];

  const jobOpenings = [
    {
      title: "Embroidery Designer",
      department: "Design",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create stunning and intricate embroidery designs for our diverse clients."
    },
    {
      title: "Embroidery Machine Operator",
      department: "Production",
      location: "Mumbai",
      type: "Full-time",
      experience: "1-3 years",
      description: "Operate and maintain our state-of-the-art embroidery machines with precision."
    },
    {
      title: "Sales & Account Manager",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      description: "Manage client relationships, drive new business, and ensure customer satisfaction."
    },
    {
      title: "Customer Support Specialist",
      department: "Support",
      location: "Mumbai",
      type: "Full-time",
      experience: "0-2 years",
      description: "Be the friendly voice of Embrodera, assisting customers with orders and inquiries."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Embrodera Custom T-Shirt Embroidery</title>
        <meta name="description" content="Career opportunities at Embrodera. Join our creative team and be a part of the custom apparel industry. View latest job openings and benefits." />
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
                Join Our <span className="text-gradient">Creative Team</span>
              </h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto">
                At Embrodera, we're weaving creativity with craftsmanship. Grow your career with a team that's passionate about design.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">
                  Why work at <span className="text-gradient">Embrodera</span>?
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  We believe our team is the thread that holds our business together. We foster a vibrant, creative, and supportive environment where your ideas can flourish and your skills can grow.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our culture is built on innovation, collaboration, and a shared passion for turning great ideas into tangible art. We provide the tools and opportunities for you to do your best work.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 font-medium">
                    Creativity
                  </div>
                  <div className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 font-medium">
                    Growth
                  </div>
                  <div className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 font-medium">
                    Teamwork
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img 
                  class="w-full rounded-2xl shadow-2xl"
                  alt="Embrodera team working in a creative and collaborative environment"
                 src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Employee <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We invest in our team's well-being and professional growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl glass-effect card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Current <span className="text-gradient">Job Openings</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Find your next creative challenge and join our growing team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl glass-effect card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-orange-300 font-medium">{job.department}</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                      {job.type}
                    </div>
                  </div>

                  <p className="text-white/80 mb-6">{job.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-orange-300" />
                      <span className="text-white/80">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-4 w-4 text-orange-300" />
                      <span className="text-white/80">{job.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-orange-300" />
                      <span className="text-white/80">{job.type}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleApplyClick}
                    className="w-full btn-primary py-3 font-semibold rounded-lg"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;