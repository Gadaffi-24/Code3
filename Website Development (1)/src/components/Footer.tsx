import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

// Define the component props interface (REINSTATED)
interface FooterProps {
    // The function expects a string (the page name/key) and returns nothing (void)
    onNavigate: (page: 'home' | 'about' | 'courses' | 'contact') => void;
}

// Accept the onNavigate prop (REINSTATED)
export default function Footer({ onNavigate }: FooterProps) {
    
    // Helper function to create an onClick handler (REINSTATED)
    // This uses a closure to pass the 'page' argument
    const handleNavigate = (page: 'home' | 'about' | 'courses' | 'contact') => (e: React.MouseEvent) => {
        e.preventDefault(); // Crucial: Prevents the default <a> tag behavior (refreshing the page)
        onNavigate(page);   // Call the navigation function passed down from the parent
    };

    return (
        <footer className="bg-[#3c4fb2] text-white py-12">
            <div className="max-w-7xl mx-auto px-20">
                <div className="grid grid-cols-4 gap-16 mb-12">
                    
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-start gap-3 mb-4">
                            <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 w-[46px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>C³</span>
                            </div>
                            <div>
                                <p className="text-xl leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>Code³</p>
                            </div>
                        </div>
                        <p className="text-sm leading-6 pl-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            "We Manage IT, So You Can Manage Business"
                        </p>
                    </div>

                    {/* Quick Links - UPDATED: Using onClick handler for navigation */}
                    <div>
                        <h3 className="text-lg mb-7 leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Quick Links</h3>
                        <ul className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            
                            <li className="leading-6">
                                <a 
                                    href="#home" 
                                    onClick={handleNavigate('home')} 
                                    className="text-[#f5f9ff] hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            
                            <li className="leading-6">
                                <a 
                                    href="#about" 
                                    onClick={handleNavigate('about')} 
                                    className="hover:underline"
                                >
                                    About Us
                                </a>
                            </li>
                            
                            <li className="leading-6">
                                <a 
                                    href="#courses" 
                                    onClick={handleNavigate('courses')} 
                                    className="hover:underline"
                                >
                                    Courses
                                </a>
                            </li>
                            
                            <li className="leading-6">
                                <a 
                                    href="#contact" 
                                    onClick={handleNavigate('contact')} 
                                    className="hover:underline"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info (ADDED) */}
                    <div>
                        <h3 className="text-lg mb-7 leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Contact Info</h3>
                        <ul className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <li className="flex items-start gap-3 leading-6">
                                <MapPin size={16} className="mt-1 flex-shrink-0 text-gray-400" />
                                <span>Johannesburg, South Africa</span>
                            </li>
                            <li className="flex items-start gap-3 leading-6">
                                <Phone size={16} className="mt-1 flex-shrink-0 text-gray-400" />
                                <span>+27 11 123 4567</span>
                            </li>
                            <li className="flex items-start gap-3 leading-6">
                                <Mail size={16} className="mt-1 flex-shrink-0 text-gray-400" />
                                <span>info@empoweringthenation.co.za</span>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us (ADDED) */}
                    <div>
                        <h3 className="text-lg mb-7 leading-[28px]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/" className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="https://www.instagram.com/" className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.linkedin.com/" className="bg-violet-500 w-12 h-12 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="leading-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        © 2024 Code³ - Empowering the Nation. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}