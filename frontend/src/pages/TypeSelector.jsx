import { motion } from 'framer-motion';
import { useFlagCheck } from '../context/FlagCheckContext';

const relationshipTypes = [
  { id: 'partner', emoji: '💕', label: 'Partner / Date' },
  { id: 'friend', emoji: '👯', label: 'Friend' },
  { id: 'situationship', emoji: '😵‍💫', label: 'Situationship' },
  { id: 'coworker', emoji: '💼', label: 'Coworker' },
  { id: 'complicated', emoji: '🤷', label: "It's Complicated" },
];

function TypeSelector() {
  const { setCurrentScreen, setSelectedType } = useFlagCheck();

  const handleSelectType = (typeId) => {
    setSelectedType(typeId);
    setCurrentScreen('input');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] text-white px-6 py-12">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentScreen('landing')}
        className="mb-8 text-white/70 hover:text-white transition-colors"
      >
        Back
      </motion.button>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl mb-24 text-center font-bold"
      >
        Who are we checking?
      </motion.h2>

      <div className="flex flex-col gap-6 max-w-md mx-auto">
        {relationshipTypes.map((type, index) => (
          <motion.button
            key={type.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectType(type.id)}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-4"
          >
            <div className="text-4xl">{type.emoji}</div>
            <div className="text-xl text-left font-semibold">{type.label}</div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default TypeSelector;