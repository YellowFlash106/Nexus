const Pricing = () => {
  const plans = [
    { name: "Starter", price: "$29", features: ["Up to 10 projects", "5GB storage", "Community support", "Basic analytics"], highlighted: false },
    { name: "Pro", price: "$99", features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "API access"], highlighted: true },
    { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Dedicated support", "SLA guarantee", "Custom integrations", "Advanced security", "Training sessions"], highlighted: false }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${plan.highlighted ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500 shadow-xl shadow-purple-500/20' : 'bg-slate-800/40 border-purple-500/20'}`}>
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50' : 'border-2 border-purple-500/50 hover:bg-purple-500/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
