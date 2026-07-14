import React from 'react';
import { Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <a 
              href="mailto:nguyenmaihien142@gmail.com"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Mail size={20} />
              nguyenmaihien142@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Mạng xã hội</h3>
            <a 
              href="https://github.com/nguyenmaihien142"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-slate-400">© Portfolio cá nhân</p>
            <p className="text-sm text-slate-400">Năm {currentYear}</p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-slate-400">
            Được xây dựng với <Heart size={16} className="text-red-500" /> bằng React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
