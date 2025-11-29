import { motion } from 'motion/react';

export function OrganicFlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-teal-950" />

      {/* Биолюминесцентные круги */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bio-circle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${100 + i * 20}px`,
            height: `${100 + i * 20}px`,
            background: `radial-gradient(circle, rgba(16, 185, 129, ${0.1 + (i % 3) * 0.05}), transparent 70%)`,
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Плавающие органические формы */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`organic-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <motion.path
              d="M30,10 Q40,20 30,30 T30,50 Q20,40 30,30 T30,10"
              fill="none"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="2"
              animate={{
                d: [
                  'M30,10 Q40,20 30,30 T30,50 Q20,40 30,30 T30,10',
                  'M30,10 Q45,25 30,30 T30,50 Q15,35 30,30 T30,10',
                  'M30,10 Q40,20 30,30 T30,50 Q20,40 30,30 T30,10',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Световые лучи */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"
          style={{
            left: `${5 + i * 8}%`,
            height: '200%',
            top: '-50%',
            transformOrigin: 'top',
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Плавающие частицы */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-emerald-400/40"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
          }}
          animate={{
            y: [0, -100 - Math.random() * 100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Волнообразные линии */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`wave-path-${i}`}
            d={`M0,${100 + i * 100} Q250,${80 + i * 100} 500,${100 + i * 100} T1000,${100 + i * 100}`}
            fill="none"
            stroke="rgba(16, 185, 129, 0.15)"
            strokeWidth="2"
            animate={{
              d: [
                `M0,${100 + i * 100} Q250,${80 + i * 100} 500,${100 + i * 100} T1000,${100 + i * 100}`,
                `M0,${100 + i * 100} Q250,${120 + i * 100} 500,${100 + i * 100} T1000,${100 + i * 100}`,
                `M0,${100 + i * 100} Q250,${80 + i * 100} 500,${100 + i * 100} T1000,${100 + i * 100}`,
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Темный оверлей для контраста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
    </div>
  );
}
