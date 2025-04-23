interface BlurImageOverlayProps {
    text: string;
    imgPath: string;
  }
  
  export default function BlurImageOverlay({ text, imgPath }: BlurImageOverlayProps) {
    return (
      <div className="relative w-full h-full overflow-hidden group rounded-2xl shadow-lg">
        {/* Background image */}
        <img
          src={imgPath}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:filter-none filter"
        />
        
        {/* Semi-transparent grey overlay */}
        <div className="absolute inset-0 bg-gray-950/40 transition-opacity duration-1000 group-hover:bg-gray-950/0"></div>
          
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-3xl font-bold transition-opacity duration-1000 group-hover:opacity-0 text-center px-2">
          {text}
        </div>
        
        {/* Smooth sliding animation */}
        <style jsx>{`
          .group {
            animation: slide 60 linear infinite; /* Increased the duration for slower sliding */
          }
          
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    );
  }
  