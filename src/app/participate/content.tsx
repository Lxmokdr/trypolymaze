import Image from 'next/image';
export default function Content() {
    return (
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <Image
                        src="/bgmaze.png"
                        alt="Background Maze"
                        fill
                        className="object-cover opacity-5 z-0"
                        priority
                      />
  
        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start gap-6 px-4 text-center top-45 pl-10 lg:w-9/10 left-1/20">
          <h1 className="text-5xl text-white font-bold">Competition Specifications</h1>
          <p className="text-2xl">To know more about POLYMAZE 2025 rules and specifications,</p>
          <p className="text-2xl">You can download the following documents:</p>
          
          <div className="flex justify-between gap-4 w-full flex-col md:flex-row">
            <div className="flex flex-col items-center w-full">
              <iframe
                allowFullScreen
                scrolling="no"
                className="fp-iframe"
                src="https://heyzine.com/flip-book/3667ba7629.html"
                style={{
                  border: '1px solid lightgray',
                  width: '75%',  
                  height: '400px',  
                }}
              ></iframe>
              <a
                href="https://drive.google.com/file/d/1_FBBsWVozrdldmpxPELrz5wYs59zGCtq/view"
                download
                className="bg-black text-white py-4 px-10 rounded-xl border border-white text-xl m-5 hover:text-[#797979]  hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div>
  
            <div className="flex flex-col items-center w-full">
              <iframe
                allowFullScreen
                scrolling="no"
                className="fp-iframe"
                src="https://heyzine.com/flip-book/eb46d298f6.html"
                style={{
                  border: '1px solid lightgray',
                  width: '75%',  // Adjusted for better space management
                  height: '400px',  // Fixed height
                }}
              ></iframe>
              <a
                href="https://drive.google.com/file/d/1tA8501Qm8iioUJyotb9vCfd62M5yRTjp/view"
                download
                className="bg-black text-white py-4 px-10 rounded-xl border border-white text-xl m-5 hover:text-[#797979]  hover:border-[#797979]"
              >
                Download PDF
              </a>
            </div>

          </div>
          <div className="w-full justify-center">
          <a
                href=""
                download
                className="bg-white text-black py-4 px-10 rounded-xl text-xl m-5 justify-center hover:bg-[#797979]"
              >
                Register Now
              </a>
          </div>
        </div>
      </div>
    );
  }
  