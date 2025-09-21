import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { attorneys } from "@/app/data/our-team";
import Image from "next/image";


interface Props {
  params: { slug: string };
}

export default function AttorneyProfile({ params }: Props) {
  const attorney = attorneys.find((a) => a.slug === params.slug);

  if (!attorney) {
    return <div className="p-10 text-center">Attorney not found</div>;
  }

  return (
    <div>
    <Header />
  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
   </div>
   <section className="max-w-4xl mx-auto py-16 px-6">
  <div className="bg-white shadow-lg rounded-lg p-8">
    <Image
      src={attorney.image}
      alt={attorney.name}
      width={600}
      height={400}
      className="w-full h-80 object-contain rounded-md mb-6"
    />
    <h1 className="text-3xl font-bold text-gray-800">{attorney.name}</h1>
    <h2 className="text-lg text-blue-600 mt-1">{attorney.role}</h2>
    <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
      {attorney.fullBio}
    </p>
  </div>
</section>
    <Footer />
 </div>
  );
}
