import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { X, Heart, MapPin } from 'lucide-react';
import { USERS } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const Card = ({ user, onSwipe, style }: { user: typeof USERS[0], onSwipe: (dir: 'left' | 'right') => void, style?: any }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
       onSwipe('right');
    } else if (info.offset.x < -100) {
       onSwipe('left');
    }
  };

  return (
    <motion.div 
      style={{ x, rotate, opacity, ...style }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute w-full max-w-sm md:max-w-md h-[65vh] md:h-[70vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none border border-gray-100"
    >
      <img src={user.image} alt={user.name} className="w-full h-full object-cover pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-8 px-6 text-white">
        <h2 className="text-3xl font-bold mb-1 flex items-center gap-2 shadow-black drop-shadow-md">
          {user.name} 
          <span className="w-3 h-3 bg-green-400 rounded-full border-2 border-black shadow-md"></span>
        </h2>
        <div className="flex items-center gap-2 text-gray-200 mb-6 drop-shadow-md">
          <MapPin size={16} />
          <span className="text-lg">{user.location}</span>
        </div>

        <div className="flex justify-center gap-8 mb-4">
           <button 
             className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-love-pink hover:border-love-pink transition-colors group"
             onPointerDown={(e) => e.stopPropagation()}
             onClick={() => onSwipe('left')}
           >
             <X size={32} className="text-white group-hover:rotate-90 transition-transform" />
           </button>
           <button 
             className="w-16 h-16 rounded-full bg-love-pink flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:bg-[#ef5da8]"
             onPointerDown={(e) => e.stopPropagation()}
             onClick={() => onSwipe('right')}
           >
             <Heart size={32} className="text-white fill-white" />
           </button>
        </div>
      </div>
    </motion.div>
  );
}

const Discovery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
        setTimeout(() => navigate('/match'), 400);
    }
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col md:flex-row">
        {/* Background Elements - Desktop: Vertical Split */}
        <div className="absolute top-0 left-0 w-full h-1/2 md:h-full md:w-1/2 bg-love-lime z-0 rounded-b-[3rem] md:rounded-none md:rounded-r-[4rem]"></div>
        
        <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-white z-0">
           <div className="absolute top-20 right-20 w-64 h-64 bg-love-pink/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 right-40 w-80 h-80 bg-love-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Left Content (Desktop) */}
        <div className="relative z-10 px-6 pt-8 pb-4 flex flex-col md:w-1/2 md:h-full md:justify-center md:pl-20">
           <div className="flex justify-between items-center md:block">
              <div>
                <p className="text-sm font-medium text-gray-700 opacity-80 ml-1 md:text-gray-900">9:41</p>
                <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mt-1 md:mt-6 leading-tight md:mb-8">
                  Browse through <br/> personalized <br className="hidden md:block"/> match suggestions
                </h1>
                <p className="hidden md:block text-gray-700 text-lg max-w-md">
                  Find someone who shares your passion for coffee and conversation. Swipe right to connect!
                </p>
              </div>
              <div className="w-12 h-12 md:hidden rounded-full border-2 border-white shadow-md overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=12" alt="Profile" />
              </div>
           </div>
        </div>

        {/* Cards Stack */}
        <div className="flex-1 relative z-10 flex justify-center items-center pb-24 md:pb-0 md:w-1/2 md:h-full">
            <div className="relative w-full max-w-sm md:max-w-md h-[65vh] md:h-[70vh]">
               <AnimatePresence>
                  {USERS.map((user, index) => {
                     if (index < currentIndex) return null;
                     const isTop = index === currentIndex;
                     return (
                       <Card 
                         key={user.id} 
                         user={user} 
                         onSwipe={handleSwipe}
                         style={{ 
                           zIndex: USERS.length - index,
                           scale: isTop ? 1 : 0.95,
                           y: isTop ? 0 : 20, // Desktop: maybe shift right if background? No, stick to stack.
                         }} 
                       />
                     );
                  }).reverse()} 
               </AnimatePresence>
               
               {currentIndex >= USERS.length && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/50 rounded-[2rem] border-2 border-dashed border-gray-300 backdrop-blur-sm">
                    <p className="text-xl text-gray-500 mb-4">No more profiles nearby.</p>
                    <button onClick={() => setCurrentIndex(0)} className="text-love-purple font-bold hover:underline text-lg">Start Over</button>
                  </div>
               )}
            </div>
        </div>
    </div>
  );
};

export default Discovery;
