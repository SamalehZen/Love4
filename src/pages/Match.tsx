import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { USERS, CAFES } from '../data/mock';

const Match = () => {
  const navigate = useNavigate();
  const cafe = CAFES[0];
  const user = USERS[0];
  const myProfile = "https://i.pravatar.cc/150?img=12"; // Mock self

  return (
    <div className="h-screen w-full bg-love-purple flex flex-col md:flex-row relative overflow-hidden">
       {/* Header/Nav */}
       <div className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center text-white pointer-events-none">
          <button onClick={() => navigate(-1)} className="bg-black/20 p-2 rounded-full backdrop-blur-sm pointer-events-auto hover:bg-black/40 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold md:hidden">It's a Match!</h1>
          <div className="w-10"></div> {/* Spacer */}
       </div>

       {/* Left Half (Desktop) / Top Half (Mobile) - Image */}
       <div className="h-[55%] md:h-full md:w-1/2 relative group">
          <img src={cafe.image} alt={cafe.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          
          {/* Desktop Title Overlay */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/20">
             <h1 className="text-6xl lg:text-8xl font-bold text-white drop-shadow-2xl tracking-tight opacity-90">
               It's a <br/> Match!
             </h1>
          </div>
       </div>

       {/* Marquee Strip - Desktop: Vertical separator or kept as is? Kept as strip across bottom of image or vertically?
           Let's make it a horizontal strip that spans the whole screen in center for fun, or just standard.
           Let's keep it as a divider.
       */}
       <div className="bg-black py-3 md:py-4 overflow-hidden whitespace-nowrap relative z-10 -mt-1 md:mt-0 md:absolute md:bottom-0 md:left-0 md:w-full md:z-30 flex items-center border-y border-white/10">
          <div className="animate-marquee flex gap-8 text-white text-sm md:text-lg font-medium tracking-wider uppercase opacity-90">
             <span>Turn your spark into a flame. ✳ Turn your spark into a flame. ✳ Turn your spark into a flame.</span>
             <span>Turn your spark into a flame. ✳ Turn your spark into a flame. ✳ Turn your spark into a flame.</span>
             <span className="hidden md:inline">Turn your spark into a flame. ✳ Turn your spark into a flame. ✳ Turn your spark into a flame.</span>
          </div>
       </div>

       {/* Right Half (Desktop) / Bottom Half (Mobile) - Content */}
       <div className="flex-1 md:h-full md:w-1/2 relative flex flex-col">
          {/* Pink Section */}
          <div className="h-1/2 md:h-[40%] bg-love-pink w-full relative flex flex-col items-center justify-center pt-6 md:pt-0 p-8 text-center">
             <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl z-30">
                <div className="bg-love-lime p-3 rounded-full">
                   <img src="/vite.svg" className="w-8 h-8 opacity-0" alt="Heart" /> {/* Just a placeholder for heart icon */}
                   <div className="absolute inset-0 flex items-center justify-center">❤️</div>
                </div>
             </div>
             
             <h2 className="text-4xl md:text-6xl text-white font-normal mb-2 drop-shadow-md" style={{ fontFamily: 'Pacifico, cursive' }}>
               {cafe.name}
             </h2>
             <p className="text-gray-800 font-bold text-lg md:text-xl tracking-wide">{cafe.location}</p>
          </div>

          {/* Purple Section */}
          <div className="flex-1 bg-[#6C5CE7] md:bg-[#5D3FD3] w-full flex flex-col items-center justify-center pb-10 md:pb-0 relative">
              {/* Avatars Overlapping */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                 <div className="relative group">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden shadow-xl relative z-10 -mr-4 transition-transform group-hover:-translate-x-2">
                       <img src={user.image} alt="Match" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div className="relative group">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white overflow-hidden shadow-xl relative z-20 -ml-4 transition-transform group-hover:translate-x-2">
                       <img src={myProfile} alt="Me" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>

              <button className="mt-12 md:mt-20 bg-love-lime text-black font-bold text-lg md:text-xl px-12 py-4 md:px-16 md:py-5 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform active:scale-95 hover:shadow-[#D4FC46]/50">
                 Say Hello !
              </button>
          </div>
       </div>
    </div>
  );
};

export default Match;
