import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-20">
        <h1 className="text-4xl text-center mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
          Get In Touch
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Have questions about our courses? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl mb-8 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Address
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone size={24} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Phone
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    +27 11 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Email
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    info@empoweringthenation.co.za
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-white">
              <h3 className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Office Hours
              </h3>
              <div className="space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Campus Locations with Maps */}
        <div className="mt-20">
          <h2 className="text-3xl text-center mb-4 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
            Visit Our Campuses
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            We have three convenient locations across Johannesburg
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sandton Campus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Sandton Campus
                  </h3>
                </div>
                <p className="text-blue-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  123 Rivonia Road<br />
                  Sandton, 2196<br />
                  Johannesburg
                </p>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3347168395447!2d28.053308415018965!3d-26.107454983474567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573b5f5d5c5d5%3A0x5c5c5c5c5c5c5c5c!2sSandton%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandton Campus Map"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Located in the heart of Sandton's business district with easy access to public transport.
                </p>
              </div>
            </div>

            {/* Rosebank Campus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Rosebank Campus
                  </h3>
                </div>
                <p className="text-pink-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  56 Bath Avenue<br />
                  Rosebank, 2196<br />
                  Johannesburg
                </p>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.891635802345!2d28.040546715018!3d-26.14585998352874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0b5e4c1%3A0x5a5a5a5a5a5a5a5a!2sRosebank%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890124"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rosebank Campus Map"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Vibrant location near the Gautrain station and Rosebank Mall for convenient learning.
                </p>
              </div>
            </div>

            {/* Soweto Campus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Soweto Campus
                  </h3>
                </div>
                <p className="text-purple-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  45 Vilakazi Street<br />
                  Orlando West, 1804<br />
                  Soweto
                </p>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.234567890123!2d27.908765415015!3d-26.236789983581234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959b5e5e5e5e5e%3A0x6d6d6d6d6d6d6d6d!2sSoweto%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1234567890125"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Soweto Campus Map"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Community-focused campus in the historic heart of Soweto, serving local residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
