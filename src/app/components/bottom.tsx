"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black px-2 py-2 md:px-4 md:py-3 flex flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3 z-50">
      {/* Logo */}
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Polymaze Logo"
          width={100}
          height={40}
          className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[150px]"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-white flex-grow-0 mx-1 sm:mx-2">
        <h1 className="text-sm sm:text-base md:text-xl font-semibold mb-0">
          Contact
        </h1>
        <a
          href="mailto:vic@g.enp.edu.dz"
          className="text-[8px] sm:text-[10px] md:text-sm underline block hover:text-gray-300 transition-colors"
        >
          vic@g.enp.edu.dz
        </a>
        <span className="text-[8px] sm:text-[10px] md:text-sm block">VIC ENP</span>
      </div>

      {/* Footer Section with Image and Social Icons */}
      <div className="flex flex-col items-center space-y-1 flex-shrink-0">
        <Image
          src="/vic.png"
          alt="Vic"
          width={100}
          height={40}
          className="w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[150px]"
        />

        {/* Social Icons */}
        <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2">
          {[
            {
              href: "https://www.instagram.com/vic.enp/",
              src: "/instagram.png",
              alt: "Instagram",
            },
            {
              href: "https://www.facebook.com/share/1F69yBsnta/?mibextid=wwXIfr",
              src: "/facebook.png",
              alt: "Facebook",
            },
            {
              href: "https://www.linkedin.com/company/vicenp/",
              src: "/linkedin.png",
              alt: "LinkedIn",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full hover:opacity-80 transition-opacity"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={20}
                height={20}
                className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] md:w-[24px] md:h-[24px]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}