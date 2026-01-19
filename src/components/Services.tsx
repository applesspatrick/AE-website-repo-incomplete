import { Sparkles, Zap, Droplets, Scissors, Syringe, ImageOff, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Skin Treatments',
      description: 'Advanced dermatological solutions for acne, pigmentation, aging, and skin rejuvenation.',
      benefits: ['Clear complexion', 'Even skin tone', 'Reduced signs of aging'],
    },
    {
      icon: Scissors,
      title: 'Hair Treatments',
      description: 'Comprehensive hair restoration and treatment for hair loss, thinning, and scalp conditions.',
      benefits: ['Hair regrowth', 'Stronger follicles', 'Healthy scalp'],
    },
    {
      icon: Zap,
      title: 'Laser Procedures',
      description: 'State-of-the-art laser technology for hair removal, skin resurfacing, and pigmentation.',
      benefits: ['Permanent hair reduction', 'Smooth skin', 'Minimal downtime'],
    },
    {
      icon: Droplets,
      title: 'HydraFacial',
      description: 'Medical-grade hydradermabrasion treatment for deep cleansing and hydration.',
      benefits: ['Instant glow', 'Deep hydration', 'Refined pores'],
    },
    {
      icon: Syringe,
      title: 'Botox & Fillers',
      description: 'FDA-approved injectables for wrinkle reduction and facial contouring.',
      benefits: ['Natural-looking results', 'Non-surgical', 'Minimal recovery'],
    },
    {
      icon: ImageOff,
      title: 'Tattoo Removal',
      description: 'Safe and effective laser tattoo removal with minimal scarring.',
      benefits: ['Fade or remove tattoos', 'Safe process', 'Professional care'],
    },
    {
      icon: Heart,
      title: 'Acne & Scar Management',
      description: 'Specialized treatments for acne, acne scars, and post-inflammatory marks.',
      benefits: ['Clear skin', 'Reduced scarring', 'Improved texture'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Treatments
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive aesthetic solutions tailored to your unique needs, delivered with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-rose-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 text-rose-500 font-medium hover:text-rose-600 transition-colors flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
