import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e4f0ff] pt-12 py-4">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p className="text-sm text-center text-blue-400">
          Contact: myu@m1u.jp
        </p>
        <div className="flex space-x-4">
          <a 
            href="https://instagram.com/myumase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Instagram
          </a>
          <a 
            href="https://myu12.base.ec/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Shop
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
