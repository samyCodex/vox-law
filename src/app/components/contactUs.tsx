import Image from "next/image";

const ContactUsPage = () => {
  return (
    <main className="bg-gray-50">
      {/* ==================== HERO ==================== */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16">
        <h1 className="text-3xl font-bold">CONTACT US</h1>
      </section>

      {/* ==================== CONTACT INFO + FORM ==================== */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 py-16 px-6">
        {/* Left Side - Info */}
        <div className="bg-gray-900 text-white p-10 rounded-lg">
          <h2 className="text-2xl font-bold">Have Any Questions?</h2>
          <p className="mt-3 text-gray-300">
            Feel free to contact us! We are always ready to assist you with any inquiries or legal matters.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="font-semibold">📞 Phone Numbers</p>
              <p className="text-gray-300">(+234) 816 948 5151</p>
            </div>

            <div>
              <p className="font-semibold">📍 Physical Address</p>
              <p className="text-gray-300">Sabr Plaza, Kachia Road, Kaduna, Kaduna State</p>
            </div>

            <div>
              <p className="font-semibold">📧 Email Address</p>
              <p className="text-gray-300">voxregis.s.a.p@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-black p-10 rounded-lg shadow-md">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
              <input type="text" placeholder="Your Phone" className="w-full p-3 border rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
              <select className="bg-black w-full p-3 border rounded-md">
                <option>Corporate & Commercial Law</option>
                <option>Corporate Governance & Compliance</option>
                <option>Litigation & Dispute Resolution</option>
                <option>Regulatory Advisory</option>
                <option>Other</option>
              </select>
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-md h-28"></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
            >
              Request consultation
            </button>
          </form>
        </div>
      </section>

      {/* ==================== MAP ==================== */}
      <section className="relative w-full h-96">
        <Image 
          src="/images/Map@2x.jpg" 
          alt="Map" 
          fill 
          className="object-cover rounded-md"
          priority
        /> 
        {/* Pin Markers */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-brown-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-brown-600 rounded-full"></div>
        <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-brown-600 rounded-full"></div>
      </section>

      {/* ==================== ASK AN EXPERT ==================== */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-lg -mt-12 relative z-10">
        <h2 className="text-xl font-semibold">Have Legal Questions? Ask Our Experts!</h2>
        <button className="mt-4 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition">
          Ask an expert 
        </button>
      </section>
    </main>
  );
};

export default ContactUsPage;
