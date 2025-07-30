import React from 'react';
import FormSection from './FormSection';
import { User } from 'lucide-react';

const PersonalInformation = ({ formData, handleInputChange }) => {
  return (
    <FormSection icon={User} title="Personal Information">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 mb-2 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="Your Full Name"
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-white/80 mb-2 font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default PersonalInformation;