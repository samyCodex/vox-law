import Image from "next/image";

const AboutUsPage = () => {
  return (
    <main className="bg-gray-50">
      {/* ==================== HERO ==================== */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16">
        <h1 className="text-3xl font-bold">ABOUT US</h1>
      </section>

      {/* ==================== OUR ATTORNEYS ==================== */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Attorneys</h2>
        <p className="text-gray-600 mt-2">
          Meet our experienced and dedicated legal team.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "ijaiya", role: "Senior Attorney", image: "/images/ijaiya.jpg" },
            { name: "nicole", role: "Senior Attorney", image: "/images/nicole.jpg" },
            { name: "nathaniel", role: "Senior Attorney", image: "/images/nathaniel.png" },
          ].map((attorney, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <Image
                src={attorney.image}
                alt={attorney.name}
                width={400}
                height={224}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{attorney.name}</h3>
              <p className="text-sm text-gray-500">{attorney.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== VIDEO + STATS ==================== */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Video Box */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg h-72 flex items-center justify-center shadow-lg">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              ▶
            </button>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
              <h2 className="text-xl font-semibold">We Provide Best Solutions</h2>
              <p className="text-sm mt-2 text-gray-300">
                Professional, reliable, and trusted legal support for all your needs
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "1200+", label: "Cases Won" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "32", label: "Expert Attorneys" },
              { value: "1800", label: "Happy Clients" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADVOCACY SECTIONS ==================== */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Advocacy is a passion with proven results
          </h2>
          <p className="mt-4 text-gray-600">
            A law firm with a strong track record of advocacy and litigation,
            ensuring clients always get the best representation both in and out of court.
          </p>
          <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
        {/* Right Image */}
        <Image
          src="/images/advocating-passion.jpg"
          alt="Advocacy"
          width={800}
          height={288}
          className="w-full h-72 object-cover rounded-lg shadow"
        />
      </section>

      {/* ==================== IDEAS SECTION ==================== */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <Image
          src="/images/ideas.jpg"
          alt="Ideas"
          width={800}
          height={288}
          className="w-full h-72 object-cover rounded-lg shadow"
        />

        {/* Right Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            You&apos;ve got ideas. We protect them.
          </h2>
          <p className="mt-4 text-gray-600">
            Advocates in intellectual property and business law. We help protect
            your ideas with strong legal support and strategic insight.
          </p>
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Litigation</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div className="bg-gray-800 h-2 rounded-full w-[85%]"></div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <span>Corporate Law</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div className="bg-gray-800 h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
