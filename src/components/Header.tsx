import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AE</span>
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Aesthetic Essence
              </h1>
              <p className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                Skin & Hair Clinic
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'doctors', 'gallery', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-rose-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+9779851234567"
              className="flex items-center space-x-2 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              {['home', 'services', 'about', 'doctors', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left px-4 py-2 text-gray-700 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:+9779851234567"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
              >
                <Phone size={18} />
                <span>Book Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
