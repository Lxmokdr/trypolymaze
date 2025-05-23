"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black px-2 py-3 md:px-4 md:py-4 flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3 z-50">
      {/* Logo */}
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Polymaze Logo"
          width={120}
          height={48}
          className="w-auto h-auto max-w-[80px] sm:max-w-[120px] md:max-w-[200px]"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-white flex-grow-0 mx-1 sm:mx-2">
        <h1 className="text-sm sm:text-base md:text-2xl font-semibold mb-0">
          Contact
        </h1>
        <a
          href="mailto:vic@g.enp.edu.dz"
          className="text-[8px] sm:text-xs md:text-base underline block hover:text-gray-300 transition-colors"
        >
          vic@g.enp.edu.dz
        </a>
        <span className="text-[8px] sm:text-xs md:text-base block">VIC ENP</span>
      </div>

      {/* Footer Section with Image */}
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/vic.png"
          alt="VIC Logo"
          width={120}
          height={48}
          className="w-auto h-auto max-w-[80px] sm:max-w-[120px] md:max-w-[200px]"
        />
      </div>
    </div>
  );
}