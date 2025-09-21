"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Briefcase, Banknote, Home, House, GraduationCap } from "lucide-react";
import Link from "next/link";
import { attorneys } from "../data/our-team";


 const clients = [
  {
    name: "GetPayed Technologies – Fintech platform simplifying payments.",
    image: "/images/getpayed.jpg",
  },
  {
    name: "iRecruiters Africa – Talent solutions & HR advisory.",
    image: "/images/irecruit.png",
  },
  {
    name: "Nigerian Exchange Group (NGX Group) – Africa’s foremost market infrastructure.",
    image: "/images/ngx.png",
  },
  {
    name: "Softhills Property Development Company – Real estate development.",
    image: "/images/softhill.png",
  },
  {
    name: "MyKreeb – Proptech startup for housing & rentals.",
    image: "/images/mykreeb.jpg",
  },
  {
    name: "EduBanc – Education-focused financial services provider.",
    image: "/images/edunabc.png",
  },
]

const AboutUsPage = () => {
  return (
    <main className="bg-gray-50">
      {/* ==================== HERO ==================== */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          ABOUT US
        </motion.h1>
      </section>

      {/* ==================== OUR ATTORNEYS ==================== */}
     <section className="py-16 bg-white text-center px-6">
      <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
      <p className="text-gray-600 mt-2">
        Meet the diverse experts behind our vision
      </p>

     <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {attorneys.map((attorney, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
    >
      <Link href={`/team/${attorney.slug}`}>
<div className="w-full h-64 overflow-hidden rounded-md mb-4">
  <Image
    src={attorney.image}
    alt={attorney.name}
    width={400}
    height={500}
    className="w-full h-full object-cover object-top"
  />
</div>

        <h3 className="font-semibold text-lg text-gray-800">
          {attorney.name}
        </h3>
        <p className="text-sm text-gray-500">{attorney.role}</p>
        <p className="text-gray-600 text-sm mt-2">{attorney.shortBio}</p>
      </Link>
    </motion.div>
  ))}
</div>
    </section>

      {/* ==================== VIDEO + STATS ==================== */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg h-72 flex items-center justify-center shadow-lg"
          >
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              ▶
            </button>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white">
              <h2 className="text-xl font-semibold">We Provide Best Solutions</h2>
              <p className="text-sm mt-2 text-gray-300">
                Professional, reliable, and trusted legal support for all your needs
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "100+", label: "Cases Won" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10", label: "Expert Attorneys" },
              { value: "100+", label: "Happy Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CLIENTELE ==================== */}
   <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Clientele</h2>
        <p className="text-gray-600 mt-2">
         At Vox Regis, we are privileged to serve a diverse portfolio of clients cutting across industries, reflecting the breadth of our practice and the depth of our expertise. Our clientele includes forward-thinking startups, established corporates, financial institutions, real estate developers, and technology-driven enterprises.
          Some of the organizations we have advised include:
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-5 bg-gray-50 rounded-lg shadow hover:shadow-md transition flex items-start gap-4"
            >
<div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16  rounded-full flex items-center justify-center">
  <Image
    src={client.image}
    alt={client.name}
    width={64}
    height={64}
    className="w-3/4 h-3/4 object-contain"
  />
</div>

              <p className="text-gray-700">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

export default AboutUsPage;
