"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black px-3 py-4 md:px-6 md:py-6 flex flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 z-50 sticky bottom-0"> {/* Changed to sticky positioning */}
      {/* Logo */}
      <div className="flex justify-center items-center flex-shrink-0"> {/* flex-shrink-0 to prevent logo from shrinking too much */}
        <Image
          src="/logo.png"
          alt="Polymaze Logo"
          width={150} // Smaller base width for mobile consideration
          height={60} // Smaller base height
          className="w-auto h-auto max-w-[100px] sm:max-w-[150px] md:max-w-[250px]" // Significantly smaller max-width on mobile
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-white flex-grow sm:flex-grow-0 sm:mx-2 md:mx-4"> {/* flex-grow for mobile to take space, less on larger screens */}
        <h1 className="text-base sm:text-lg md:text-4xl font-semibold mb-0 sm:mb-1"> {/* Smallest font size on mobile */}
          Contact
        </h1>
        <a
          href="mailto:vic@g.enp.edu.dz"
          className="text-[10px] sm:text-xs md:text-lg underline block hover:text-gray-300 transition-colors" // Very small font for email
        >
          vic@g.enp.edu.dz
        </a>
        <span className="text-[10px] sm:text-xs md:text-lg block">VIC ENP</span> {/* Very small font */}
      </div>

      {/* Footer Section with Image and Social Icons */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-4 flex-shrink-0"> {/* flex-shrink-0 */}
        {/* Profile Image or Logo */}
        <Image
          src="/vic.png"
          alt="Vic"
          width={150} // Smaller base width
          height={60} // Smaller base height
          className="w-auto h-auto max-w-[100px] sm:max-w-[150px] md:max-w-[250px]" // Significantly smaller max-width on mobile
        />

        {/* Social Icons */}
        <div className="flex space-x-1.5 sm:space-x-2 md:space-x-4"> {/* Smaller space-x for mobile */}
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
              className="bg-white rounded-full hover:opacity-80 transition-opacity" // Smaller padding
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={24} // Logical width
                height={24} // Logical height
                className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[32px] md:h-[32px]" // Smallest icons on mobile
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}