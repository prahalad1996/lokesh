import React from 'react';

const FormSection = ({ icon: Icon, title, children }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
        <Icon className="h-5 w-5 text-orange-300" />
        <span>{title}</span>
      </h3>
      {children}
    </div>
  );
};

export default FormSection;