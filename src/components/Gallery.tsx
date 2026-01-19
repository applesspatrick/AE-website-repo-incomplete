import { Star } from 'lucide-react';

const Gallery = () => {
  const testimonials = [
    {
      name: 'Anita Rai',
      treatment: 'HydraFacial',
      content: 'The results were immediate! My skin has never looked better. The team is professional and caring.',
      rating: 5,
    },
    {
      name: 'Rohan Shrestha',
      treatment: 'Hair Restoration',
      content: 'After years of hair loss, I finally found a solution that works. Thank you Aesthetic Essence!',
      rating: 5,
    },
    {
      name: 'Sita Gurung',
      treatment: 'Laser Treatment',
      content: 'Amazing experience! The doctors are knowledgeable and the clinic is world-class.',
      rating: 5,
    },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5240962/pexels-photo-5240962.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6663336/pexels-photo-6663336.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Results That Speak
          </h2>
          <p className="text-lg text-gray-600">
            See the transformative results our clients have achieved with our expert care and advanced treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-rose-500">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
