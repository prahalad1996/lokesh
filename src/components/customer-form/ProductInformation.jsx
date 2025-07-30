import React from 'react';
import FormSection from './FormSection';
import { Shirt, Upload } from 'lucide-react';

const tshirtTypeOptions = ['Crew Neck T-Shirt', 'V-Neck T-Shirt', 'Polo Shirt', 'Hoodie', 'Sweatshirt'];
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const colorOptions = ['Black', 'White', 'Navy Blue', 'Heather Grey', 'Red', 'Royal Blue', 'Green'];
const placementOptions = ['Left Chest', 'Right Chest', 'Full Front', 'Full Back', 'Left Sleeve', 'Right Sleeve'];

const ProductInformation = ({ formData, handleInputChange }) => {
  return (
    <FormSection icon={Shirt} title="T-Shirt & Design Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 mb-2 font-medium">T-Shirt Type *</label>
          <select
            name="tshirtType"
            value={formData.tshirtType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
          >
            <option value="">Select Type</option>
            {tshirtTypeOptions.map((type) => (
              <option key={type} value={type} className="bg-gray-800">
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-white/80 mb-2 font-medium">T-Shirt Color *</label>
          <select
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
          >
            <option value="">Select Color</option>
            {colorOptions.map((color) => (
              <option key={color} value={color} className="bg-gray-800">
                {color}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-white/80 mb-2 font-medium">Size *</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
          >
            <option value="">Select Size</option>
            {sizeOptions.map((size) => (
              <option key={size} value={size} className="bg-gray-800">
                {size}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-white/80 mb-2 font-medium">Quantity *</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            min="1"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-colors"
            placeholder="e.g., 10"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white/80 mb-2 font-medium">Embroidery Placement *</label>
          <select
            name="placement"
            value={formData.placement}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-orange-400 transition-colors"
          >
            <option value="">Select Placement</option>
            {placementOptions.map((placement) => (
              <option key={placement} value={placement} className="bg-gray-800">
                {placement}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-white/80 mb-2 font-medium">Upload Your Design</label>
          <div className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-dashed border-white/30 text-white/60 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:border-orange-400 transition-colors">
            <Upload className="h-5 w-5 mr-2" />
            <span>Click to upload (Feature coming soon)</span>
          </div>
        </div>
      </div>
    </FormSection>
  );
};

export default ProductInformation;