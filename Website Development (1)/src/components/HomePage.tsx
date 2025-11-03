// import imgR1 from "../imports/figma:asset/f9184f5025374e62b67fa4204401b7bdf8c1dd03.png";
// import imgR2 from "../imports/figma:asset/febc1b8992dacd19639eaa6c744185e311f83313.png";
// import imgR3 from "../imports/figma:asset/8a165b93c3e40c11e613579568bb650edc52663d.png";
// import imgImg from "../imports/figma:asset/f578f9c2a181ef669150341163e63e6e9da01878.png";
// import imgImg1 from "../imports/figma:asset/410c340aa057242400c608368f918307cdd72438.png";
// import imgImg2 from "../imports/figma:asset/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, lineHeight: '1.2' }}>
              Empowering Lives Through Skills Development
            </h1>
            <button
              onClick={() => onNavigate('courses')}
              className="border-2 border-black px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-black hover:text-white transition-colors text-sm md:text-base"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Explore Our Courses
            </button>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6" style={{ fontFamily: 'Poltawski Nowy, serif' }}>
              Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              To empower domestic workers by offering easily accessible skill training that boosts earning potential, enhances employability and encourages entrepreneurship in marginalized communities.
            </p>
          </div>
        </div>

        {/* Course Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="src/assets/f9184f5025374e62b67fa4204401b7bdf8c1dd03.png" alt="First Aid Course" className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="src/assets/febc1b8992dacd19639eaa6c744185e311f83313.png" alt="Sewing Course" className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg sm:col-span-2 lg:col-span-1">
            <img src="src/assets/8a165b93c3e40c11e613579568bb650edc52663d.png" alt="Gardening Course" className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* 🎥 How-to-Use Video Section */}
      <div className="mt-16 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl mb-6 text-gray-800"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
        >
          How to Use Our Platform
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video border-4 border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe width="770" height="315" src="src/assets/Code3.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12 lg:mb-16 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src="src/assets/f578f9c2a181ef669150341163e63e6e9da01878.png" alt="Sarah Mthembu" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Sarah Mthembu
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    First Aid Graduate
                  </p>
                </div>
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "The first aid course gave me confidence and opened new job opportunities. I now work as a certified caregiver and earn double what I used to make."
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src="src/assets/410c340aa057242400c608368f918307cdd72438.png" alt="John Ndaba" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    John Ndaba
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Landscaping Graduate
                  </p>
                </div>
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "After completing the landscaping course, I started my own garden design business. I now have 15 regular clients and employ two assistants."
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img src="src/assets/ec901f1c0d6bdc3abb3b7f2578c96a444ee001e2.png" alt="Maria Sithole" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Maria Sithole
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sewing Graduate
                  </p>
                </div>
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "The sewing skills I learned helped me start an alteration service from home. I can now support my family while working flexible hours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-20 text-center">
          <h2 className="text-4xl mb-6 text-black" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
            Join hundreds of learners who have already transformed their lives through our comprehensive training programs.
          </p>
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => onNavigate('courses')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg hover:shadow-xl transition-shadow"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Browse Courses
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-black text-black px-10 py-4 rounded-full text-lg hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
