import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PersonalInformation from '@/components/customer-form/PersonalInformation';
import AddressInformation from '@/components/customer-form/AddressInformation';
import ProductInformation from '@/components/customer-form/ProductInformation';
import AdditionalInformation from '@/components/customer-form/AdditionalInformation';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    tshirtType: '',
    size: '',
    color: '',
    quantity: '1',
    placement: '',
    specialRequests: '',
    hearAboutUs: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `🧵 Embrodera - New Custom Order Request

👤 Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📍 Address:
${formData.address}
City: ${formData.city}, ${formData.state} - ${formData.pincode}

👕 T-Shirt & Design Details:
T-Shirt Type: ${formData.tshirtType}
Size: ${formData.size}
Color: ${formData.color}
Quantity: ${formData.quantity}
Placement: ${formData.placement}

💬 Additional Info:
Special Requests: ${formData.specialRequests || 'None'}
How did you hear about us?: ${formData.hearAboutUs}

Please provide a quote for this order. Thank you! 🙏`;

    const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "Quote Request Sent! 🎉",
      description: "Your request is being sent via WhatsApp. Our team will contact you shortly with a quote."
    });

    setFormData({
      name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '',
      tshirtType: '', size: '', color: '', quantity: '1', placement: '',
      specialRequests: '', hearAboutUs: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Custom Order Form - Embrodera</title>
        <meta name="description" content="Fill out our form to get a custom quote for your t-shirt embroidery project. Tell us your requirements and our team will contact you shortly." />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Custom Embroidery <span className="text-gradient">Order Form</span>
              </h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto">
                Fill out the details below to get a personalized quote for your t-shirt embroidery project.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 lg:p-12 rounded-2xl glass-effect"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Your Project Details</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <PersonalInformation formData={formData} handleInputChange={handleInputChange} />
                  <AddressInformation formData={formData} handleInputChange={handleInputChange} />
                  <ProductInformation formData={formData} handleInputChange={handleInputChange} />
                  <AdditionalInformation formData={formData} handleInputChange={handleInputChange} />

                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full btn-primary py-4 text-lg font-semibold rounded-lg group"
                    >
                      Get Quote via WhatsApp
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-white/60 text-sm text-center mt-4">
                      Your request will be sent via WhatsApp and our team will contact you with a quote within 24 hours.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerForm;