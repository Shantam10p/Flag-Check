import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFlagCheck } from '../context/FlagCheckContext';

const relationshipTypes = {
  partner: { emoji: '💕', label: 'Partner / Date' },
  friend: { emoji: '👯', label: 'Friend' },
  situationship: { emoji: '😵‍💫', label: 'Situationship' },
  coworker: { emoji: '💼', label: 'Coworker' },
  complicated: { emoji: '🤷', label: "It's Complicated" },
};

function InputScreen() {
  const { selectedType, setCurrentScreen, setInputData } = useFlagCheck();
  const [activeTab, setActiveTab] = useState('describe');
  const [description, setDescription] = useState('');
  const [screenshots, setScreenshots] = useState([]);
  const [contextOpen, setContextOpen] = useState(false);
  const [additionalContext, setAdditionalContext] = useState('');

  const handleAnalyze = () => {
    setInputData({ description, screenshots, additionalContext });
    setCurrentScreen('loading');
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setScreenshots([...screenshots, ...files]);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] text-white px-6 py-6 flex flex-col overflow-hidden">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCurrentScreen('type-selection')}
        className="mb-6 text-white/70 hover:text-white transition-colors self-start"
      >
        Back
      </motion.button>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-center mb-10"
      >
        Checking a {relationshipTypes[selectedType]?.label || selectedType} {relationshipTypes[selectedType]?.emoji}
      </motion.h2>

      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
              activeTab === 'upload'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            Upload Screenshots
          </button>
          <button
            onClick={() => setActiveTab('describe')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
              activeTab === 'describe'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            Describe It
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 h-[220px]"
        >
          {activeTab === 'upload' ? (
            <div className="h-full bg-white/5 rounded-2xl p-6 border-2 border-dashed border-white/20 flex flex-col items-center justify-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-center"
              >
                <div className="text-5xl mb-3">📸</div>
                <p className="text-base text-gray-300 mb-1">Click to upload screenshots</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              </label>
              {screenshots.length > 0 && (
                <div className="mt-3 text-sm text-gray-400">
                  {screenshots.length} file(s) selected
                </div>
              )}
            </div>
          ) : (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us what's going on..."
              className="w-full h-full bg-white/5 rounded-2xl p-5 border border-white/20 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          )}
        </motion.div>

        {/* Add Context Dropdown */}
        <div className="mb-10">
          <button
            onClick={() => setContextOpen(!contextOpen)}
            className="w-full bg-white/5 rounded-2xl p-4 border border-white/20 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
          >
            <span className="text-base">Add context</span>
            <span className={`transform transition-transform ${contextOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {contextOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4"
            >
              <textarea
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                placeholder="Any additional context that might help..."
                className="w-full h-24 bg-white/5 rounded-2xl p-4 border border-white/20 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </motion.div>
          )}
        </div>

        {/* Analyze Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAnalyze}
          disabled={!description.trim() && screenshots.length === 0}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-3xl shadow-2xl shadow-purple-500/30 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze 🔍
        </motion.button>
      </div>
    </div>
  );
}

export default InputScreen;