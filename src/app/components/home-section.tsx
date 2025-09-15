"use client";
import React from "react";
import { Briefcase, FileText, Scale, Shield, Award, Users, Zap, Lightbulb, Handshake, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Animation

/* ==================== SERVICES ==================== */
const ServicesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        <Briefcase size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Our Mission</h3>
        <p className="text-gray-600 mt-2">
          To provide legal and strategic advisory solutions that go beyond law — combining deep legal expertise with business insight, innovation, and speed — to help our clients build structures that endure, scale, and thrive.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-4"
      >
        <FileText size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Contract Law</h3>
        <p className="text-gray-600 mt-2">
          Drafting, reviewing, and negotiating strong contracts for your peace of mind.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-4"
      >
        <Scale size={40} className="mx-auto text-amber-600" />
        <h3 className="mt-4 font-bold text-lg">Our Vision</h3>
        <p className="text-gray-600 mt-2">
          To be Africa’s leading client-centered law firm, known for transforming complex legal, regulatory, and business challenges into opportunities for sustainable growth and long-term success.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ==================== CORE VALUES ==================== */
const CoreValuesSection = () => {
  const values = [
    { icon: Shield, title: "Integrity", text: "We uphold the highest ethical standards, ensuring trust, transparency, and accountability in all our dealings." },
    { icon: Award, title: "Excellence", text: "We deliver rigorous, precise, and innovative legal solutions tailored to the unique needs of our clients." },
    { icon: Users, title: "Client-Centricity", text: "Our clients’ success defines ours. We listen, anticipate, and design solutions that advance their business goals." },
    { icon: Zap, title: "Speed & Agility", text: "We move with urgency and precision, delivering solutions at the pace of business." },
    { icon: Lightbulb, title: "Innovation", text: "We embrace forward-thinking approaches, leveraging technology and multidisciplinary insights to deliver results beyond conventional law practice." },
    { icon: Handshake, title: "Collaboration", text: "We partner with our clients and stakeholders, fostering relationships that enable shared growth and long-term impact." },
    { icon: Globe, title: "Impact", text: "We measure our success not just by transactions closed, but by the lasting value we create for businesses, institutions, and society." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Core Values</h2>
        <p className="text-gray-600 mt-2">The principles that guide everything we do.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <val.icon size={40} className="text-amber-600 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">{val.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
    <p className="text-gray-600 mt-2">Meet our experienced and dedicated legal team.</p>
    
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { name: "Maximillian Ezeude", role: "Managing Partner", image: "/images/maximillian.jpg" },
        { name: "Eugene Divine Izu, LLM", role: "Associate", image: "/images/aximillian.jpg" },
        { name: "Adefolajuwon Ijaiya", role: "Corporate Governance & Investment", image: "/images/ijaiya.jpg" },
        { name: "Onyinye Nicole", role: "Legal & Strategy Advisor", image: "/images/nicole.jpg" },
        { name: "Nathaniel Handan ", role: "Technology & Innovation Advisor", image: "/images/nathaniel.png" },
      ].map((attorney, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
          {/* Image */}
          <Image
            src={attorney.image}
            alt={attorney.name}
            width={400}   // ✅ Added width
            height={500}  // ✅ Added height
            className="w-full aspect-[3/4] object-cover rounded-md mb-4"
          />

          {/* Text */}
          <h3 className="font-semibold text-lg text-gray-800">{attorney.name}</h3>
          <p className="text-sm text-gray-500">{attorney.role}</p>
        </div>
      ))}
    </div>
  </section>
)

const FeatureSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-gray-300 h-72 rounded">
        <Image
          src="/images/exe.jpg"
          alt="legal excellence"
          width={600}   // ✅ Added width
          height={400}  // ✅ Added height
          className="w-full object-cover rounded-md mb-4"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Legal Excellence, Personalized Care</h2>
        <p className="mt-4 text-gray-600">
          Our client base continues to expand as more organizations entrust us with their legal and strategic needs. 
          Beyond delivering sound legal advice, we position ourselves as long-term partners; 
          helping clients anticipate risks, seize opportunities, and structure solutions that support growth and sustainability.
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
          &quot;Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio 
          mauris lectus consequat sed. Pretium purus feugiat volutpat.&quot;
          <footer className="mt-4 font-semibold">– Irvine Guzman</footer>
        </blockquote>
        <div>
          <Image
            src="/images/exe.jpg"
            alt="legal excellence"
            width={600}   // ✅ Fixed
            height={400}  // ✅ Fixed
            className="w-full object-cover rounded-md mb-4"
          />
        </div>
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
      <CoreValuesSection />
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
