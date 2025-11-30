import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface HolographicGridProps {
  mousePosition: { x: number; y: number };
}

export function HolographicGrid({ mousePosition }: HolographicGridProps) {
  const [gridPoints, setGridPoints] = useState<{ x: number; y: number; active: boolean }[]>([]);

  useEffect(() => {
    const points = [];
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 8; y++) {
        points.push({
          x: (x * 100) / 11,
          y: (y * 100) / 7,
          active: Math.random() > 0.7,
        });
      }
    }
    setGridPoints(points);

    const interval = setInterval(() => {
      setGridPoints((prev) =>
        prev.map((point) => ({
          ...point,
          active: Math.random() > 0.7,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Основная голографическая сетка */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="hologram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
            <stop offset="50%" stopColor="rgba(52, 211, 153, 0.2)" />
            <stop offset="100%" stopColor="rgba(167, 243, 208, 0.1)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Горизонтальные линии */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-line-${i}`}
            x1="0%"
            y1={`${(i * 100) / 7}%`}
            x2="100%"
            y2={`${(i * 100) / 7}%`}
            stroke="url(#hologram-gradient)"
            strokeWidth="1"
            filter="url(#glow)"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              strokeWidth: [1, 2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Вертикальные линии */}
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={`v-line-${i}`}
            x1={`${(i * 100) / 11}%`}
            y1="0%"
            x2={`${(i * 100) / 11}%`}
            y2="100%"
            stroke="url(#hologram-gradient)"
            strokeWidth="1"
            filter="url(#glow)"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              strokeWidth: [1, 2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Точки на пересечениях */}
        {gridPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r={point.active ? 4 : 2}
            fill={point.active ? 'rgba(16, 185, 129, 0.8)' : 'rgba(52, 211, 153, 0.3)'}
            filter="url(#glow)"
            animate={{
              r: point.active ? [4, 6, 4] : 2,
              opacity: point.active ? [0.8, 1, 0.8] : 0.3,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Диагональные сканирующие линии */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`diag-${i}`}
            x1="-10%"
            y1={`${i * 25}%`}
            x2="110%"
            y2={`${i * 25 + 50}%`}
            stroke="rgba(16, 185, 129, 0.3)"
            strokeWidth="2"
            filter="url(#glow)"
            animate={{
              x1: ['-10%', '110%'],
              x2: ['110%', '230%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',
            }}
          />
        ))}
      </svg>

      {/* Интерактивные волны от курсора */}
      <motion.div
        className="absolute rounded-full border-2 border-emerald-400/30"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          width: '100px',
          height: '100px',
          marginLeft: '-50px',
          marginTop: '-50px',
        }}
        animate={{
          scale: [1, 3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Плавающие голографические панели */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`panel-${i}`}
          className="absolute rounded-lg border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm"
          style={{
            width: `${150 + i * 50}px`,
            height: `${100 + i * 30}px`,
            left: `${20 + i * 20}%`,
            top: `${15 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, -10, 0],
            x: (mousePosition.x - 50) * (0.1 + i * 0.05),
          }}
          transition={{
            y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
            rotateX: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut' },
            x: { type: 'spring', stiffness: 50, damping: 20 },
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
