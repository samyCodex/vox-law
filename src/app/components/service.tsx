const ServicesPage = () => {
  return (
    <main className="bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16">
        <h1 className="text-3xl font-bold">SERVICES</h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Tailored Legal Solutions, Exceptional Results
          </h2>
          <p className="mt-4 text-gray-600">
            Our firm offers a wide range of legal services designed to meet the
            unique needs of our clients. We blend traditional legal expertise
            with modern strategies to deliver practical and effective results.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: "⚖️", title: "Criminal Law" },
            { icon: "📑", title: "Business Law" },
            { icon: "🏛️", title: "Civil Litigation" },
            { icon: "📜", title: "Family Law" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-3xl">{service.icon}</div>
              <p className="mt-3 font-semibold text-gray-800">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ASK EXPERT ================= */}
      <section className="bg-gradient-to-r from-yellow-700 to-yellow-900 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-lg">
        <h2 className="text-xl font-semibold">
          Have Legal Questions? Ask Our Experts!
        </h2>
        <button className="mt-4 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition">
          Ask an expert
        </button>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
     <section className="max-w-7xl mx-auto py-16 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
    Practice Areas
  </h2>
  <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
    At VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS, we provide a wide range of 
    legal and advisory services designed to anticipate client needs and deliver solutions 
    that are practical, strategic, and timely.
  </p>

  <div className="mt-12 grid md:grid-cols-3 gap-8">
    {[
      {
        icon: "⚖️",
        title: "Corporate & Commercial Law",
        desc: "We advise businesses on incorporation, restructuring, shareholder arrangements, joint ventures, mergers and acquisitions, and commercial agreements. Beyond compliance, our goal is to ensure clients achieve their business objectives securely and efficiently.",
      },
      {
        icon: "🏢",
        title: "Corporate Governance & Compliance",
        desc: "We help organizations establish governance structures that promote accountability, transparency, and sustainability — from board advisory to company secretarial services.",
      },
      {
        icon: "⚔️",
        title: "Litigation & Dispute Resolution",
        desc: "Our team represents clients in commercial, civil, and regulatory disputes. We excel in courtroom advocacy while also prioritizing mediation and arbitration where beneficial.",
      },
      {
        icon: "💰",
        title: "Banking, Finance & Capital Markets",
        desc: "We advise financial institutions, fintechs, and investors on transactions such as loan syndications, project finance, securitization, and regulatory compliance.",
      },
      {
        icon: "🏠",
        title: "Real Estate & Infrastructure",
        desc: "Our practice covers land acquisition, conveyancing, leases, joint ventures, and property financing, as well as legal structuring for infrastructure projects.",
      },
      {
        icon: "📡",
        title: "Technology, Media & Telecommunications",
        desc: "We provide guidance on data protection, cybersecurity, fintech regulation, digital platforms, and intellectual property in the fast-evolving digital economy.",
      },
      {
        icon: "💡",
        title: "Intellectual Property",
        desc: "We protect innovations, brands, and creative works through IP registration, licensing, anti-counterfeiting strategies, and dispute resolution.",
      },
      {
        icon: "📜",
        title: "Regulatory Advisory",
        desc: "Our team supports businesses in navigating Nigeria’s dynamic regulatory environment with compliance audits, policy development, and licensing frameworks.",
      },
      {
        icon: "👔",
        title: "Employment & Labour Law",
        desc: "We advise on employee relations, contracts, workplace policies, compensation, staff restructuring, and labour disputes.",
      },
      {
        icon: "🏛️",
        title: "Public Sector & Development Advisory",
        desc: "We partner with government bodies, NGOs, and development organizations on policy advisory, governance, and project implementation.",
      },
    ].map((area, idx) => (
      <div
        key={idx}
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
      >
        <div className="text-4xl">{area.icon}</div>
        <h3 className="mt-4 font-semibold text-lg text-gray-800">{area.title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{area.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* ================= FAQ ================= */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {[
            "What are your consultation fees?",
            "How long will my case take?",
            "Do you offer payment plans?",
            "What areas of law do you specialize in?",
            "Can I book an online consultation?",
          ].map((q, idx) => (
            <details
              key={idx}
              className="bg-gray-800 rounded-md p-4 cursor-pointer"
            >
              <summary className="font-semibold">{q}</summary>
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Choose Your Plan
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "$99",
              features: ["1 Consultation", "Basic Legal Advice", "Email Support"],
            },
            {
              title: "Business",
              price: "$299",
              features: [
                "5 Consultations",
                "Contract Drafting",
                "Priority Support",
              ],
            },
            {
              title: "Fixed Plan",
              price: "$499",
              features: [
                "Unlimited Consultations",
                "Court Representation",
                "Full Support",
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-8 text-center"
            >
              <h3 className="font-bold text-xl text-gray-800">{plan.title}</h3>
              <p className="text-3xl font-bold text-yellow-700 mt-4">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
 