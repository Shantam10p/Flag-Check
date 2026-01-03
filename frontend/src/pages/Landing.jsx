import { motion } from 'framer-motion';
import { useFlagCheck } from '../context/FlagCheckContext';

function Landing() {
  const { setCurrentScreen } = useFlagCheck();

  const exampleResults = [
    { verdict: '🚩', text: 'Leaves you on read for days', color: 'from-red-500/20 to-red-600/20' },
    { verdict: '💚', text: 'Always makes time for you', color: 'from-green-500/20 to-green-600/20' },
    { verdict: '💛', text: 'Mixed signals detected', color: 'from-yellow-500/20 to-yellow-600/20' },
    { verdict: '🚩', text: 'Only texts after midnight', color: 'from-red-500/20 to-red-600/20' },
    { verdict: '💚', text: 'Respects your boundaries', color: 'from-green-500/20 to-green-600/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-pink-600/20 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 z-10"
      >
        <h1 className="text-5xl mb-4">Is it a 🚩 or 💚?</h1>
        <p className="text-gray-400 text-lg">Find out if they're a red flag or green flag</p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentScreen('type-selection')}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-3xl mb-16 shadow-2xl shadow-purple-500/50 z-10 font-bold text-lg"
      >
        Check Now
      </motion.button>

      {/* Scrolling example cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <p className="text-sm text-gray-500 text-center mb-4">Example results</p>
        <div className="flex gap-4 md:gap-6 overflow-x-auto md:justify-center pb-4 px-6 -mx-6 md:mx-0 scrollbar-hide">
          {exampleResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className={`min-w-[280px] md:min-w-0 md:flex-1 md:max-w-[280px] bg-gradient-to-br ${result.color} backdrop-blur-sm rounded-2xl p-5 border border-white/10`}
            >
              <div className="text-3xl mb-2">{result.verdict}</div>
              <p className="text-sm text-gray-300">{result.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;