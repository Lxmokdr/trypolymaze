"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black p-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 z-[150] relative">
      {/* Logo */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image
          src="/logo.png"
          alt="Polymaze Logo"
          width={250}
          height={100}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center text-white w-full md:w-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Contact</h1>
        <a
          href="mailto:vic@g.enp.edu.dz"
          className="text-lg md:text-xl underline block"
        >
          vic@g.enp.edu.dz
        </a>
        <span className="text-lg md:text-xl block">VIC ENP</span>
      </div>

      {/* Footer Section with Image and Social Icons */}
      <div className="flex flex-col items-center space-y-4 w-full md:w-auto">
        {/* Profile Image or Logo */}
        <Image
          src="/vic.png"
          alt="Vic"
          width={250}
          height={100}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
        />

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/vic.enp/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full "
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://www.facebook.com/share/1F69yBsnta/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full "
          >
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="w-[40px] h-[40px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/vicenp/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full "
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="w-[40px] h-[40px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
