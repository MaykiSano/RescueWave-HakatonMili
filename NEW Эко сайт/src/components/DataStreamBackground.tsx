import { motion } from 'motion/react';

export function DataStreamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-emerald-950/40 to-black" />

      {/* Вертикальные потоки данных */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px h-full"
          style={{
            left: `${5 + i * 10}%`,
            background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.4), transparent)',
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'linear',
          }}
        />
      ))}

      {/* Бинарный код */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-emerald-500/30 text-xs font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        >
          {Math.random() > 0.5 ? '1010' : '0101'}
        </motion.div>
      ))}

      {/* Сетка связей */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="connection-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="2" fill="rgba(16, 185, 129, 0.6)" />
            <line x1="40" y1="40" x2="80" y2="40" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
            <line x1="40" y1="40" x2="40" y2="80" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#connection-grid)" />
      </svg>

      {/* Пульсирующие узлы */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
        >
          {/* Внешнее кольцо */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border-2 border-emerald-500/30"
            style={{
              left: '-32px',
              top: '-32px',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />

          {/* Центральная точка */}
          <motion.div
            className="w-3 h-3 rounded-full bg-emerald-500/60 shadow-lg shadow-emerald-500/50"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        </motion.div>
      ))}

      {/* Горизонтальные волны */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`h-wave-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${15 + i * 15}%`,
            background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3), transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'linear',
          }}
        />
      ))}

      {/* Энергетические импульсы */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${25 + (i % 3) * 25}%`,
            width: '4px',
            height: '4px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 1), rgba(16, 185, 129, 0))',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)',
          }}
          animate={{
            scale: [0, 3, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Диагональные линии данных */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute h-px w-64 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
          style={{
            left: `${-10 + i * 15}%`,
            top: `${10 + i * 12}%`,
            transform: 'rotate(-45deg)',
          }}
          animate={{
            x: ['0%', '200%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        />
      ))}

      {/* Темный оверлей */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}