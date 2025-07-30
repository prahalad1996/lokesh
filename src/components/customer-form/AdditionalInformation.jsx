import React from 'react';
import FormSection from './FormSection';
import { Calendar } from 'lucide-react';

const AdditionalInformation = ({ formData, handleInputChange }) => {
  return (
    <FormSection icon={Calendar} title="Additional Information">
      <div className="space-y-4">
        <div>
          <label className="block text-white/80 mb-2 font-medium">Special Requests or Design Details</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors resize-none"
            placeholder="Tell us about your design, thread colors, or any other specific instructions..."
          ></textarea>
        </div>
        
        <div>
          <label className="block text-white/80 mb-2 font-medium">How did you hear about us?</label>
          <select
            name="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
          >
            <option value="">Select Option</option>
            <option value="Social Media" className="bg-gray-800">Social Media</option>
            <option value="Google Search" className="bg-gray-800">Google Search</option>
            <option value="Friend/Family" className="bg-gray-800">Friend/Family</option>
            <option value="Advertisement" className="bg-gray-800">Advertisement</option>
            <option value="Other" className="bg-gray-800">Other</option>
          </select>
        </div>
      </div>
    </FormSection>
  );
};

export default AdditionalInformation;