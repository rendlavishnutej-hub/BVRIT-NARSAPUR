'use client';

import { motion } from 'framer-motion';

export default function FlyingPencil() {
  return (
    <div className="relative w-full max-w-lg h-96 flex items-center justify-center pointer-events-none select-none">
      {/* Cartoon Background Clouds */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 right-10 w-36 md:w-44"
      >
        <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 70 C10 70 0 55 10 40 C15 25 35 20 45 30 C55 10 85 10 95 25 C110 15 135 25 135 45 C150 50 150 70 130 70 Z"
            fill="#E2F1FF"
            stroke="#2D2D2D"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-6 left-6 w-28 md:w-36 opacity-90"
      >
        <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 70 C10 70 0 55 10 40 C15 25 35 20 45 30 C55 10 85 10 95 25 C110 15 135 25 135 45 C150 50 150 70 130 70 Z"
            fill="#F2F8FF"
            stroke="#2D2D2D"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Twinkling Stars */}
      {[
        { top: '15%', left: '20%', delay: 0, scale: 1 },
        { top: '25%', right: '15%', delay: 0.5, scale: 0.8 },
        { bottom: '30%', left: '15%', delay: 1, scale: 0.9 },
        { bottom: '15%', right: '25%', delay: 1.5, scale: 1.1 },
      ].map((star, idx) => (
        <motion.div
          key={idx}
          style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom }}
          animate={{ scale: [star.scale, star.scale * 1.3, star.scale], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          className="absolute w-6 h-6 text-amber-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="#2D2D2D" strokeWidth="1.5">
            <path d="M12 2L14.89 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.11 8.26L12 2Z" />
          </svg>
        </motion.div>
      ))}

      {/* Speed / Wind Lines */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-12 left-1/2 -translate-x-12 flex gap-3 text-charcoal/30"
      >
        <div className="w-1 h-8 bg-charcoal/40 rounded-full transform -rotate-45" />
        <div className="w-1 h-12 bg-charcoal/40 rounded-full transform -rotate-45" />
        <div className="w-1 h-6 bg-charcoal/40 rounded-full transform -rotate-45" />
      </motion.div>

      {/* MAIN FLYING PENCIL ROCKET ASSEMBLY */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [-38, -32, -38],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-64 h-64 flex items-center justify-center transform -rotate-35"
      >
        {/* SVG Pencil Rocket */}
        <svg viewBox="0 0 200 300" className="w-full h-full filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Rocket Flame / Fire */}
          <g transform="translate(100, 215)">
            {/* Outer Flame (Orange) */}
            <motion.path
              d="M-22 0 C-30 35 -15 65 0 85 C15 65 30 35 22 0 Z"
              fill="#FF6B00"
              stroke="#2D2D2D"
              strokeWidth="3"
              animate={{
                d: [
                  'M-22 0 C-30 35 -15 65 0 85 C15 65 30 35 22 0 Z',
                  'M-24 0 C-35 40 -10 75 0 95 C10 75 35 40 24 0 Z',
                  'M-20 0 C-25 30 -18 60 0 80 C18 60 25 30 20 0 Z',
                ],
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
            />
            {/* Inner Flame (Yellow) */}
            <motion.path
              d="M-13 0 C-18 22 -8 45 0 58 C8 45 18 22 13 0 Z"
              fill="#FFD000"
              animate={{
                d: [
                  'M-13 0 C-18 22 -8 45 0 58 C8 45 18 22 13 0 Z',
                  'M-15 0 C-20 26 -5 52 0 65 C5 52 20 26 15 0 Z',
                  'M-11 0 C-15 18 -10 40 0 52 C10 40 15 18 11 0 Z',
                ],
              }}
              transition={{ duration: 0.25, repeat: Infinity, repeatType: 'reverse' }}
            />
            {/* Core Flame (Bright Yellow/White) */}
            <motion.path
              d="M-6 0 C-9 12 -4 25 0 32 C4 25 9 12 6 0 Z"
              fill="#FFFCE1"
              animate={{
                scaleY: [1, 1.25, 0.9, 1.1],
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
          </g>

          {/* Yellow Rocket Fins */}
          {/* Left Fin */}
          <path
            d="M 65 170 C 35 175 25 210 30 225 C 45 220 60 210 65 195 Z"
            fill="#FFC700"
            stroke="#2D2D2D"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Right Fin */}
          <path
            d="M 135 170 C 165 175 175 210 170 225 C 155 220 140 210 135 195 Z"
            fill="#FFC700"
            stroke="#2D2D2D"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Pencil Body (Yellow Rocket Hull) */}
          <rect
            x="65"
            y="90"
            width="70"
            height="110"
            rx="8"
            fill="#F5B800"
            stroke="#2D2D2D"
            strokeWidth="4.5"
          />

          {/* Pencil Body Facet Highlight Lines */}
          <line x1="88" y1="90" x2="88" y2="200" stroke="#2D2D2D" strokeWidth="2.5" opacity="0.3" />
          <line x1="112" y1="90" x2="112" y2="200" stroke="#2D2D2D" strokeWidth="2.5" opacity="0.3" />

          {/* Black Rocket Portholes / Dots */}
          <circle cx="100" cy="118" r="7" fill="#2D2D2D" />
          <circle cx="100" cy="145" r="7" fill="#2D2D2D" />
          <circle cx="100" cy="172" r="7" fill="#2D2D2D" />

          {/* Metallic Ferrule (Band near eraser) */}
          <rect x="65" y="195" width="70" height="15" fill="#C4C4C4" stroke="#2D2D2D" strokeWidth="4" />
          <line x1="65" y1="202" x2="135" y2="202" stroke="#2D2D2D" strokeWidth="2" />

          {/* Eraser End */}
          <path
            d="M 67 210 L 133 210 C 131 222 120 228 100 228 C 80 228 69 222 67 210 Z"
            fill="#E56A55"
            stroke="#2D2D2D"
            strokeWidth="4"
          />

          {/* Wood Cone (Sharpened Tip Transition) */}
          <path
            d="M 65 90 L 100 35 L 135 90 Z"
            fill="#EAD0A8"
            stroke="#2D2D2D"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Graphite Lead Tip */}
          <path
            d="M 91 50 L 100 35 L 109 50 Z"
            fill="#2D2D2D"
            stroke="#2D2D2D"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
}