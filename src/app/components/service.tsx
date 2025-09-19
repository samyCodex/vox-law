"use client"

import {
  Landmark,
  Cpu,
  Home,
  Fuel,
  Building2,
  Users,
  Music,
  Stethoscope,
  UserCheck,
  Lightbulb,
  ShieldCheck,
  Layers,
  Trophy,
} from "lucide-react"
import { motion, Variants} from "framer-motion"
import React from "react"
import Link from "next/link";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // easeOut cubic-bezier
    },
  }),
};
const ServicesPage = () => {
  return (
    <main className="bg-gray-50">
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16"
      >
        <h1 className="text-3xl font-bold">SERVICES</h1>
      </motion.section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Tailored Legal Solutions, Exceptional Results
          </h2>
          <p className="mt-4 text-gray-600">
            Our firm offers a wide range of legal services designed to meet the
            unique needs of our clients. We blend traditional legal expertise
            with modern strategies to deliver practical and effective results.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {[
{ icon: "⚖️", title: "Corporate & Commercial Law" },
{ icon: "📋", title: "Corporate Governance & Compliance" },
{ icon: "🤝", title: "Client-Centered Practice" },
{ icon: "💰", title: "Financial Services" },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="text-3xl">{service.icon}</div>
              <p className="mt-3 font-semibold text-gray-800">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ASK EXPERT ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-lg"
      >
        <h2 className="text-xl font-semibold">
          Have Legal Questions? Ask Our Experts!
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-4 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
        <Link href="/contact">Ask an expert</Link>
        </motion.button>
      </motion.section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        >
          Practice Areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-center max-w-3xl mx-auto"
        >
          At VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS, we provide a wide
          range of legal and advisory services designed to anticipate client
          needs and deliver solutions that are practical, strategic, and timely.
        </motion.p>

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
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl">{area.icon}</div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                {area.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES SERVED ================= */}
      <section className=" py-16 px-6 bg-gray-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Industries Served
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center max-w-3xl mx-auto"
        >
          At VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS, we recognize that
          every industry comes with its own opportunities, risks, and regulatory
          requirements. Our multidisciplinary team enables us to provide
          tailored solutions that meet the realities of each sector.
        </motion.p>

        <div className="mt-12 p-6 grid md:grid-cols-2 gap-8">
          {[
            { title: "Financial Services", desc: "We advise banks...", icon: Landmark },
            { title: "Technology & Innovation", desc: "We work with startups...", icon: Cpu },
            { title: "Real Estate & Construction", desc: "We assist developers...", icon: Home },
            { title: "Energy & Natural Resources", desc: "We support oil, gas...", icon: Fuel },
            { title: "Corporate & SMEs", desc: "From large corporations...", icon: Building2 },
            { title: "Public Sector & NGOs", desc: "We advise government...", icon: Users },
            { title: "Media & Creative Industries", desc: "We protect intellectual property...", icon: Music },
            { title: "Healthcare & Pharmaceuticals", desc: "We advise hospitals...", icon: Stethoscope },
          ].map((industry, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow flex items-start space-x-4"
            >
              <industry.icon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {industry.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Our Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
          >
            At VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS, we pride ourselves
            on being more than a conventional law firm. Our approach is built
            around responsiveness, innovation, and a multidisciplinary
            perspective that allows us to add value beyond the law.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Client-Centered Practice", desc: "We tailor our advice...", icon: UserCheck },
            { title: "Innovation & Technology", desc: "We integrate technology...", icon: Lightbulb },
            { title: "Confidentiality & Integrity", desc: "We uphold the highest...", icon: ShieldCheck },
            { title: "Multidisciplinary Edge", desc: "Our team combines...", icon: Layers },
            { title: "Track Record of Success", desc: "Despite being a young firm...", icon: Trophy },
          ].map((approach, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow flex items-start space-x-4"
            >
              <approach.icon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {approach.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {approach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {[
            "What are your consultation fees?",
            "How long will my case take?",
            "Do you offer payment plans?",
            "What areas of law do you specialize in?",
            "Can I book an online consultation?",
          ].map((q, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-md p-4 cursor-pointer"
            >
              <summary className="font-semibold">{q}</summary>
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </motion.details>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
