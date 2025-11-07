import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-2">VITA-Track</p>
        <p className="text-sm mb-4">선제적 돌봄, 소중한 일상을 지키는 기술</p>
        <p className="text-xs">&copy; {currentYear} VITA-Track. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
