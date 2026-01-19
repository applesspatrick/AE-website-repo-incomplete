import { Award, GraduationCap } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      title: 'Medical Director & Dermatologist',
      specialization: 'Aesthetic Dermatology, Laser Procedures',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      qualifications: ['MBBS, MD Dermatology', '15+ years experience', 'International certifications'],
    },
    {
      name: 'Dr. Rajesh Thapa',
      title: 'Consultant Dermatologist',
      specialization: 'Hair Restoration, Cosmetic Procedures',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      qualifications: ['MBBS, MD', 'Advanced training in trichology', '10+ years experience'],
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-lg text-gray-600">
            Our team of board-certified dermatologists and aesthetic specialists bring decades of combined experience in delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-rose-500 font-medium mb-2">{doctor.title}</p>
                <p className="text-gray-600 mb-4">{doctor.specialization}</p>

                <div className="space-y-2">
                  {doctor.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      {idx === 0 ? (
                        <GraduationCap size={16} className="text-rose-400" />
                      ) : (
                        <Award size={16} className="text-rose-400" />
                      )}
                      <span>{qual}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Doctor-Led Treatments</h3>
          <p className="text-lg mb-6 text-white/90">
            All our treatments are performed or supervised by qualified medical doctors, ensuring your safety and the best possible outcomes.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-rose-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
