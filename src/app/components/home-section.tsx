import React from "react"
import { Briefcase, FileText, Scale, Users } from "lucide-react"

const ServicesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      <div>
        <Briefcase size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Business Law</h3>
        <p className="text-gray-600 mt-2">
          Guiding small & large businesses with legal solutions tailored for success.
        </p>
      </div>
      <div>
        <FileText size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Contract Law</h3>
        <p className="text-gray-600 mt-2">
          Drafting, reviewing, and negotiating strong contracts for your peace of mind.
        </p>
      </div>
      <div>
        <Scale size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Dispute Resolution</h3>
        <p className="text-gray-600 mt-2">
          Resolving disputes efficiently with professionalism and expertise.
        </p>
      </div>
    </div>
  </section>
)

const CTASection = () => (
  <section className="bg-gradient-to-r from-black to-gray-900 text-center py-12 text-white">
    <h2 className="text-2xl font-bold">Have Legal Questions? Ask Our Experts!</h2>
    <button className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded">
      Ask an Expert
    </button>
  </section>
)

const AttorneysSection = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-2xl font-bold text-gray-800">Our Attorneys</h2>
    <p className="text-gray-600 mt-2">Meet our experienced and dedicated legal team.</p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {["Jackson Rowe", "Stephanie Reily", "Matthew Wells"].map((name, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-lg p-6">
          <div className="h-48 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">Senior Attorney</p>
        </div>
      ))}
    </div>
  </section>
)

const FeatureSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-gray-300 h-72 rounded"></div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Legal Excellence, Personalized Care
        </h2>
        <p className="mt-4 text-gray-600">
          Our attorneys provide tailored strategies with client-focused results. 
          Whether personal or business matters, we stand by you every step of the way.
        </p>
        <button className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded">
          Learn more
        </button>
      </div>
    </div>
  </section>
)

const TestimonialsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800">What Our Client Says</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <blockquote className="text-gray-600 text-lg italic">
          "Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio 
          mauris lectus consequat sed. Pretium purus feugiat volutpat."
          <footer className="mt-4 font-semibold">– Irvine Guzman</footer>
        </blockquote>
        <div className="h-48 bg-gray-300 rounded"></div>
      </div>
    </div>
  </section>
)

const ConsultationFormSection = () => (
  <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl font-bold">Request A Free Consultation</h2>
        <p className="mt-4 text-gray-300">
          Fill out the form and our legal experts will reach out to discuss your case.
        </p>
      </div>
      <form className="bg-white text-black p-8 rounded shadow-md space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Phone" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" className="w-full border p-2 rounded h-24"></textarea>
        <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">
          Request Consultation
        </button>
      </form>
    </div>
  </section>
)

const BlogSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800">Our Blog</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-100 rounded shadow-md overflow-hidden">
            <div className="h-40 bg-gray-300"></div>
            <div className="p-4 text-left">
              <h3 className="font-semibold">Legal Consultation Article {i}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Short description of the article goes here...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const HomePageSection = () => {
  return (
    <>
      <ServicesSection />
      <CTASection />
      <AttorneysSection />
      <FeatureSection />
      <TestimonialsSection />
      <ConsultationFormSection />
      <BlogSection />
    </>
  )
}

export default HomePageSection

