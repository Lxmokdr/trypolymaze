"use client";
import Image from "next/image";

export default function Bottom() {
  return (
    <div className="w-full bg-black p-6 flex items-center justify-between z-[150] relative">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Polymaze Logo"
        width={250}
        height={100}
        className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
      />

      {/* Contact Info */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-semibold mb-2">Contact</h1>
        <a href="mailto:vic@g.enp.edu.dz" className="text-xl underline">
          vic@g.enp.edu.dz
        </a>
        <br />
        <span className="text-xl">VIC ENP</span>
      </div>

      {/* Footer Section with Image and Social Icons */}
      <div className="flex flex-col items-center space-y-4">
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
            className="bg-white rounded-full"
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
            className="bg-white rounded-full"
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
            className="bg-white rounded-full"
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
