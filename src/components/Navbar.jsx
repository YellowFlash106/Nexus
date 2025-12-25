const Navbar = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Nexus
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
