import { ArrowRight, Sparkles, Award, Shield } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="text-rose-500" size={20} />
            <span className="text-sm text-gray-700">Premium Aesthetic Care in Kathmandu</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Refining Skin.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Restoring Confidence.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-delay">
            Experience world-class aesthetic treatments with advanced technology and doctor-led care at Nepal's premier skin and hair clinic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button variant="primary" onClick={scrollToContact}>
              Book Appointment
              <ArrowRight className="inline ml-2" size={20} />
            </Button>
            <Button variant="secondary" onClick={scrollToServices}>
              Explore Treatments
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Award, title: 'Doctor-Led', desc: 'Expert medical professionals' },
              { icon: Shield, title: 'Safe & Ethical', desc: 'Highest safety standards' },
              { icon: Sparkles, title: 'Advanced Tech', desc: 'Latest equipment & methods' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="text-rose-500 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
