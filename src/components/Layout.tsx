import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowRight, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { Logo } from './Logo';
import { GetStartedModal } from './GetStartedModal';
import { useAuthStore } from '../stores/authStore';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuthStore();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const sections = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/courses', label: 'Courses' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {sections.map(section => (
                <Link
                  key={section.path}
                  to={section.path}
                  onClick={handleLinkClick}
                  className={`text-white/80 hover:text-[#FFD700] transition-colors relative ${
                    currentPath === section.path ? 'text-[#FFD700]' : ''
                  }`}
                >
                  {section.label}
                  {currentPath === section.path && (
                    <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#FFD700] rounded-full" />
                  )}
                </Link>
              ))}
              {user ? (
                <div className="flex items-center gap-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </Link>
                  <Link 
                    to="/register"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                    <div className="relative bg-[#FFD700] text-black px-6 py-2.5 rounded-xl font-medium transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-4 py-4 space-y-4">
              {sections.map(section => (
                <Link
                  key={section.path}
                  to={section.path}
                  onClick={handleLinkClick}
                  className={`block text-lg ${
                    currentPath === section.path ? 'text-[#FFD700]' : 'text-white/80'
                  }`}
                >
                  {section.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <User className="w-5 h-5" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="flex items-center gap-2 text-white/80 w-full"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </Link>
                  <Link 
                    to="/register"
                    onClick={handleLinkClick}
                    className="relative group w-full"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                    <div className="relative bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-integration" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">AI Integration</Link></li>
                <li><Link to="/services/automation" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Automation</Link></li>
                <li><Link to="/services/consulting" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="/about/our-story" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/about/team" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/about/careers" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/courses" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/documentation" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/support" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                <li><Link to="/questionnaire" onClick={handleLinkClick} className="text-gray-400 hover:text-white transition-colors">Questionnaire</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Xscape Velocity. All rights reserved.</p>
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <GetStartedModal 
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </div>
  );
}