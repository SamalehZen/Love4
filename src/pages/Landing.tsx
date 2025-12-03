import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-love-lime relative overflow-hidden flex flex-col md:flex-row">
      {/* Vertical Text Strip (Desktop Only) */}
      <div className="hidden md:flex w-24 h-full flex-col justify-center items-center py-10 border-r border-black/5">
        <div className="rotate-180 text-gray-400 font-medium tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
          Turn your spark into a flame. ✳ Turn your spark into a flame.
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        <div className="absolute top-8 left-8 z-10">
           <span className="text-xl font-medium text-gray-800">//Dating App</span>
        </div>

        <div className="absolute top-8 right-8 z-10">
           <div className="bg-love-pink p-2 rounded-full text-white">
             <Heart size={20} fill="white" />
           </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-0">
           {/* Circle/Shape Background for Image */}
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.8, ease: "backOut" }}
             className="relative w-full max-w-md aspect-square md:max-w-lg mb-[-50px] z-10"
           >
              {/* Abstract shapes behind */}
              <div className="absolute top-10 left-10 w-64 h-64 bg-love-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-4 w-64 h-64 bg-love-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              {/* Main Image Mask */}
              <div className="relative w-[80%] mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl transform -rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1621460245524-393ccf17a453?q=80&w=2508&auto=format&fit=crop" 
                  alt="Couple" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transform -rotate-2 shadow-lg">
                  <span className="text-sm font-bold text-love-purple">Discover True Romance</span>
                </div>
              </div>
              
              {/* Decor elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-20 -right-4 bg-white p-3 rounded-2xl shadow-xl rotate-6"
              >
                  <Heart className="text-love-pink fill-current" size={32} />
              </motion.div>
           </motion.div>

           {/* Bottom Card Section */}
           <motion.div 
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="w-full bg-love-pink rounded-t-[3rem] p-8 md:p-12 pb-20 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] max-w-2xl mx-auto relative z-20"
           >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your next adventure <br/> in love starts here.
              </h1>
              
              <button 
                onClick={() => navigate('/discovery')}
                className="group bg-gray-900 text-white text-lg px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 hover:bg-gray-800 transition-all hover:scale-105"
              >
                Get Started
                <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </span>
              </button>
              
              <div className="mt-8 flex justify-center gap-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900/30 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900/30 rounded-full"></div>
              </div>
           </motion.div>
        </div>
      </div>
      
      {/* Decorative background curve to fill the bottom on wide screens if mostly lime */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-love-purple -z-10 skew-y-3 origin-bottom-right transform translate-y-20 hidden md:block"></div>
    </div>
  );
};

export default Landing;
