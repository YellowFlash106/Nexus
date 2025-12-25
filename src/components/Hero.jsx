const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 backdrop-blur-sm">
              ✨ Introducing Nexus 2.0
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Digital Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into reality with our revolutionary platform that combines power, simplicity, and elegance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-500/50 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">50K+</div>
              <div className="text-gray-400 mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-400 mt-2">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">4.9★</div>
              <div className="text-gray-400 mt-2">Rating</div>
            </div>
          </div>
        </div>

        <div className="relative mt-20 h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
