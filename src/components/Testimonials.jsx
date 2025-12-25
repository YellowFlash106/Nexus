const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Chen", role: "CTO at TechCorp", content: "Nexus transformed how we build and deploy. The speed improvements alone saved us 40% in development time.", avatar: "SC" },
    { name: "Michael Rodriguez", role: "Founder at StartupXYZ", content: "The best investment we made this year. ROI was evident within the first month of implementation.", avatar: "MR" },
    { name: "Emily Watson", role: "Lead Developer", content: "Finally, a platform that actually understands developer needs. The DX is incredible!", avatar: "EW" }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-xl text-gray-300">See what our users have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};