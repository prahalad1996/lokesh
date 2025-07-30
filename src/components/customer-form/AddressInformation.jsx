import React from 'react';
import FormSection from './FormSection';
import { MapPin } from 'lucide-react';

const AddressInformation = ({ formData, handleInputChange }) => {
  return (
    <FormSection icon={MapPin} title="Delivery Address">
      <div className="space-y-4">
        <div>
          <label className="block text-white/80 mb-2 font-medium">Full Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
            placeholder="House/Flat No., Street, Area"
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-white/80 mb-2 font-medium">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-white/80 mb-2 font-medium">State *</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
              placeholder="State"
            />
          </div>
          <div>
            <label className="block text-white/80 mb-2 font-medium">Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
              placeholder="400001"
            />
          </div>
        </div>
      </div>
    </FormSection>
  );
};

export default AddressInformation;