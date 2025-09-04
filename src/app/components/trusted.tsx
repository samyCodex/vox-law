"use client";
import { useState } from "react";

const TrustedSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS was established in 2024 out of a clear recognition of the need for a law firm that blends traditional legal practice, technology, and modern responsiveness. In today’s fast-paced business and regulatory environment, clients require more than legal expertise, they need lawyers who can deliver accurate advice quickly.`;

  const fullText = `VOX REGIS SOLICITORS, ASSOCIATES AND PARTNERS was established in 2024 out of a clear recognition of the need for a law firm that blends traditional legal practice, technology, and modern responsiveness. In today’s fast-paced business and regulatory environment, clients require more than legal expertise, they need lawyers who can deliver accurate advice quickly to enable sound decision-making.

The firm was conceived with this reality in mind. From inception, our founders set out to build a practice where priority and speed of service are not afterthoughts but integral parts of how we work. Whether assisting a business to structure a transaction, advising on compliance, or representing a client in court, we understand that time is often as important as the advice itself.

Headquartered in Kaduna, we are strategically positioned to serve both individual and corporate clients across Nigeria and beyond. Kaduna’s unique role as a commercial and administrative hub gives us proximity to diverse industries and institutions, from finance and real estate to public sector and non-governmental organizations.

Since our registration, we have steadily grown in scope and capability. Our team is made up not only of lawyers but also of professionals with expertise in management consulting, technology, compliance, and corporate governance. This multidisciplinary approach ensures that we deliver more than just legal solutions, we provide dynamic, practical, and well-rounded value to our clients. By combining legal insight with business, regulatory, and technological perspectives, we are able to craft strategies that are both legally sound and commercially effective.`;

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 md:flex md:items-start">
        
        {/* Left Content */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800">OUR STORY</h2>

          <p className="mt-4 text-gray-600 text-justify">
            {isExpanded ? fullText : shortText}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          <div className="mt-6">
            <p className="font-signature text-xl">J Jefferson</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/3">
          <div className="relative">
            <img 
              src="/images/ourStory.jpg" 
              alt="Julio Jefferson" 
              className={`w-full object-cover rounded-md transition-all duration-500 ${
                isExpanded ? "h-[32rem]" : "h-56"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
