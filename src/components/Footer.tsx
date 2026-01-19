import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Aesthetic Essence</h3>
                <p className="text-sm text-gray-400">Skin & Hair Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Refining Skin. Restoring Confidence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#doctors" className="hover:text-rose-400 transition-colors">Our Doctors</a></li>
              <li><a href="#gallery" className="hover:text-rose-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Skin Treatments</li>
              <li>Hair Treatments</li>
              <li>Laser Procedures</li>
              <li>Botox & Fillers</li>
              <li>HydraFacial</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+977 985-1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@aestheticessence.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Aesthetic Essence Skin & Hair Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
