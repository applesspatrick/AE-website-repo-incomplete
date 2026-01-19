import { Target, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where Science Meets Beauty
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Aesthetic Essence, we believe that everyone deserves to feel confident in their own skin. Our clinic combines cutting-edge aesthetic technology with the expertise of qualified medical professionals to deliver safe, effective, and personalized treatments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of Kathmandu, we are Nepal's premier destination for advanced skin and hair treatments. Our commitment to ethical practice, patient safety, and natural-looking results sets us apart.
              </p>
              <p className="text-lg text-gray-600">
                Every treatment is doctor-led and customized to your unique needs, ensuring you receive the highest standard of aesthetic care.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Aesthetic Essence Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-rose-500">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To provide world-class aesthetic treatments with uncompromising safety and ethics.',
              },
              {
                icon: Users,
                title: 'Personalized Care',
                desc: 'Every treatment plan is tailored to your unique skin and hair needs.',
              },
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Highest medical standards with FDA-approved products and equipment.',
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'Continuous training and adoption of latest aesthetic technologies.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="text-rose-500 mb-4" size={40} />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
