import Image from "next/image";
import mainImage from "@/images/illustration-article.svg";
import profilePic from "@/images/image-avatar.webp";
export default function Home() {
  return (
      <section className="relative group">
        {/* card component */}
        <div className="relative bg-white p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[335px] z-20">
          <Image src={mainImage} alt="main image" width={300} height={300} className="rounded-2xl"/>
          {/* tags */}
          <div className="text-black  bg-yellow-400 rounded px-3 py-1 text-sm w-fit font-bold">Learning</div>
          {/* date */}
          <p className="text-gray-700 text-sm font-semibold">Published 24 Dec 2023</p>
          {/* title */}
          <h2 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer">HTML & CSS foundations</h2>
          {/* description */}
          <p className="text-gray-400 text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          {/* author */}
          <div className="flex items-center gap-4">
            <Image src={profilePic} alt="author" width={28} height={28} className="rounded-full"/>
            <p>Greg Hooper</p>
            </div>
          </div>
          <div className="absolute top-2 group-hover:top-4 left-2 group-hover:left-4 bg-black h-full w-full rounded-2xl"></div>
      </section>
  
  );
}
