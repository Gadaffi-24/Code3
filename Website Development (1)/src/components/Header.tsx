//import imgDiv from "../imports/figma:asset/6680de06a58a41a06e5916a38f070f0d70a82338.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer" onClick={() => handleNavigate('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
              <img src="src/assets/6680de06a58a41a06e5916a38f070f0d70a82338.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-700 hidden sm:block" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
              Empowering the Nation
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-lg xl:text-2xl transition-colors ${
                currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('courses')}
              className={`text-lg xl:text-2xl transition-colors ${
                currentPage === 'courses' ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Courses
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-lg xl:text-2xl transition-colors ${
                currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-lg xl:text-2xl transition-colors ${
                currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Get Quote Button */}
          <button 
            onClick={() => handleNavigate('quote')}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full text-sm md:text-base lg:text-xl xl:text-2xl transition-transform hover:scale-105" 
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-left px-4 py-2 text-lg transition-colors ${
                  currentPage === 'home' ? 'text-gray-900 font-semibold bg-gray-100 rounded-lg' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('courses')}
                className={`text-left px-4 py-2 text-lg transition-colors ${
                  currentPage === 'courses' ? 'text-gray-900 font-semibold bg-gray-100 rounded-lg' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Courses
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-left px-4 py-2 text-lg transition-colors ${
                  currentPage === 'about' ? 'text-gray-900 font-semibold bg-gray-100 rounded-lg' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="text-left px-4 py-2 text-lg text-gray-700 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavigate('quote')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105 mx-4" 
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
