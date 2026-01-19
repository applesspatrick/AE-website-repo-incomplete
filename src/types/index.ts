export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  content: string;
  rating: number;
}

export interface Appointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  message?: string;
}
