import { SlidersHorizontal, Coffee } from 'lucide-react';

const MapPage = () => {
  
  return (
    <div className="min-h-screen w-full bg-[#6C5CE7] text-white relative pb-32 md:pb-0 md:flex md:overflow-hidden">
      
      {/* Left Panel (Controls) - Desktop */}
      <div className="md:w-1/3 md:h-screen md:overflow-y-auto md:border-r md:border-white/10 flex flex-col relative z-10 bg-[#6C5CE7]">
          {/* Header */}
          <div className="pt-12 px-6 flex justify-between items-center">
            <div>
               <p className="text-sm font-medium opacity-80 md:hidden">9:41</p>
               <h1 className="text-3xl font-bold mt-2">Explore</h1>
            </div>
            <div className="p-2 bg-white/10 rounded-full cursor-pointer hover:bg-white/20">
               <SlidersHorizontal size={24} />
            </div>
          </div>

          {/* Filters */}
          <div className="px-6 mt-8">
            <div className="flex items-center gap-2 mb-2">
               <div className="bg-love-lime rounded-full p-1">
                 <div className="bg-transparent border-2 border-black w-4 h-4 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                 </div>
               </div>
               <span className="font-bold text-lg">I am Looking for</span>
            </div>
            
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-3 rounded-full bg-[#5D3FD3] text-white font-medium border border-white/10 hover:bg-[#4834a6] transition-colors">Men</button>
              <button className="flex-1 py-3 rounded-full bg-love-lime text-black font-bold shadow-lg transform hover:scale-105 transition-transform">Women</button>
              <button className="flex-1 py-3 rounded-full bg-[#5D3FD3] text-white font-medium border border-white/10 hover:bg-[#4834a6] transition-colors">Both</button>
            </div>
          </div>

          {/* Sliders & Interests */}
          <div className="px-6 mt-8 mb-8">
             <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Distance</span>
                <span className="text-sm opacity-80">10 Mi.</span>
             </div>
             <div className="relative w-full h-2 bg-white/20 rounded-full cursor-pointer group">
                <div className="absolute left-0 top-0 h-full bg-love-lime rounded-full group-hover:brightness-110" style={{ width: '30%' }}></div>
                <div className="absolute top-1/2 left-[30%] w-6 h-6 bg-love-lime border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
                <span className="absolute top-4 left-0 text-xs font-bold">3 Mi.</span>
             </div>

             <div className="mt-10">
                <div className="flex items-center gap-2 mb-4">
                    <HeartIcon className="text-love-lime fill-current" />
                    <span className="font-bold text-lg">Interests</span>
                </div>
                <div className="flex flex-wrap gap-3">
                   {['Reading', 'Travelling', 'Foodie', 'Pet Lover', 'Funny'].map((tag, i) => (
                     <span key={i} className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer hover:scale-105 transition-transform ${i < 2 ? 'bg-love-hotpink text-white shadow-lg' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}>
                       {tag}
                     </span>
                   ))}
                </div>
             </div>
          </div>
      </div>

      {/* Right Panel (Map) - Desktop fills rest, Mobile standard */}
      <div className="px-4 mt-4 md:mt-0 md:p-0 md:flex-1 md:h-screen relative">
         <h2 className="font-bold text-lg mb-4 px-2 md:hidden">Cafes Nearby You</h2>
         <div className="w-full aspect-square md:aspect-auto md:h-full bg-gray-100 rounded-[2rem] md:rounded-none relative overflow-hidden shadow-2xl md:shadow-none">
            {/* CSS Map Construction */}
            <div className="absolute inset-0 bg-[#F0F2F5]">
               {/* Roads */}
               <div className="absolute top-[20%] left-0 w-full h-16 bg-white transform -rotate-6 origin-left"></div>
               <div className="absolute top-[60%] left-0 w-full h-12 bg-white transform -rotate-3"></div>
               <div className="absolute top-0 right-[30%] w-12 h-full bg-white transform rotate-12"></div>
               
               {/* Desktop Extra Roads */}
               <div className="hidden md:block absolute bottom-0 right-0 w-full h-24 bg-white transform -rotate-1"></div>
               <div className="hidden md:block absolute top-1/2 right-0 w-32 h-full bg-white transform rotate-45"></div>

               {/* Street Names */}
               <span className="absolute top-[25%] left-12 text-gray-400 text-xs font-bold transform -rotate-6">E Broad St</span>
               <span className="absolute top-[65%] left-12 text-gray-400 text-xs font-bold transform -rotate-3">E Grand St</span>
               <span className="absolute top-[75%] left-16 text-gray-400 text-xs font-bold transform -rotate-3 text-red-500">Cedar St</span>
               <div className="absolute top-[76%] left-32 w-4 h-4 border-4 border-red-500 rounded-full"></div>

               {/* Path Line */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <path 
                    d="M 130 300 L 250 180 L 280 140" 
                    fill="none" 
                    stroke="#5D3FD3" 
                    strokeWidth="4" 
                    strokeDasharray="8 4"
                    className="drop-shadow-md"
                  />
                  {/* Extended path for desktop */}
                  <path 
                    d="M 130 300 L 50 350" 
                    fill="none" 
                    stroke="#5D3FD3" 
                    strokeWidth="4" 
                    strokeDasharray="8 4"
                    className="hidden md:block drop-shadow-md"
                  />
               </svg>

               {/* Destination Marker (Cafe) */}
               <div className="absolute top-[110px] left-[260px] transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center hover:scale-110 transition-transform cursor-pointer group">
                  <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center group-hover:bg-red-600">
                     <Coffee className="text-white w-6 h-6" />
                  </div>
                  <div className="w-6 h-20 bg-white/80 absolute -top-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-black shadow-lg whitespace-nowrap px-2 pointer-events-none">
                     Pairfect Cafe
                  </div>
                  <div className="w-2 h-8 bg-red-500 rounded-full mt-[-10px]"></div>
                  <div className="w-4 h-1 bg-black/20 blur-sm rounded-full mt-[-2px]"></div>
               </div>

               {/* User Marker (Start) */}
               <div className="absolute top-[300px] left-[130px] transform -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-8 h-8 bg-[#5D3FD3] rounded-full border-4 border-white shadow-lg relative">
                    <div className="absolute inset-0 rounded-full border border-white/50 animate-ping"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const HeartIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
  </svg>
);

export default MapPage;
