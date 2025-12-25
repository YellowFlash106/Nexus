import { Globe, Rocket, Shield, Sparkles, Zap } from "lucide-react";

const Features = () => {
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Experience unprecedented speed and performance that transforms your workflow" },
    { icon: Shield, title: "Secure by Default", description: "Enterprise-grade security protecting your data with cutting-edge encryption" },
    { icon: Sparkles, title: "AI-Powered", description: "Intelligent automation that learns and adapts to your unique needs" },
    { icon: Globe, title: "Global Scale", description: "Deploy worldwide with our distributed infrastructure in 150+ countries" },
    { icon: Lock, title: "Privacy First", description: "Your data stays yours with end-to-end encryption and zero-knowledge architecture" },
    { icon: Rocket, title: "Instant Deploy", description: "Push to production in seconds with our automated CI/CD pipeline" }
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300">Everything you need to succeed, built right in</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features