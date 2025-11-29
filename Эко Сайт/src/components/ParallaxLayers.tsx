import { motion } from 'motion/react';

interface ParallaxLayersProps {
  mousePosition: { x: number; y: number };
}

export function ParallaxLayers({ mousePosition }: ParallaxLayersProps) {
  const layers = [
    { depth: 0.1, opacity: 0.1, blur: 10 },
    { depth: 0.2, opacity: 0.15, blur: 8 },
    { depth: 0.3, opacity: 0.2, blur: 6 },
    { depth: 0.4, opacity: 0.25, blur: 4 },
    { depth: 0.5, opacity: 0.3, blur: 2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {layers.map((layer, index) => {
        const offsetX = (mousePosition.x - 50) * layer.depth;
        const offsetY = (mousePosition.y - 50) * layer.depth;

        return (
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              opacity: layer.opacity,
              filter: `blur(${layer.blur}px)`,
            }}
            animate={{
              x: offsetX,
              y: offsetY,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
          >
            {/* Геометрические формы */}
            <svg className="w-full h-full">
              {/* Круги */}
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={`circle-${i}`}
                  cx={`${20 + i * 15}%`}
                  cy={`${30 + (i % 3) * 20}%`}
                  r={`${30 + index * 10}`}
                  fill="none"
                  stroke={`rgba(16, 185, 129, ${0.3 - index * 0.05})`}
                  strokeWidth="2"
                  animate={{
                    r: [`${30 + index * 10}`, `${40 + index * 10}`, `${30 + index * 10}`],
                    rotate: [0, 360],
                  }}
                  transition={{
                    r: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 20 + index * 5, repeat: Infinity, ease: 'linear' },
                  }}
                />
              ))}

              {/* Шестиугольники */}
              {[...Array(4)].map((_, i) => (
                <motion.polygon
                  key={`hex-${i}`}
                  points={`
                    ${40 + i * 20},${40 + i * 15}
                    ${50 + i * 20},${35 + i * 15}
                    ${60 + i * 20},${40 + i * 15}
                    ${60 + i * 20},${50 + i * 15}
                    ${50 + i * 20},${55 + i * 15}
                    ${40 + i * 20},${50 + i * 15}
                  `}
                  fill="none"
                  stroke={`rgba(52, 211, 153, ${0.25 - index * 0.04})`}
                  strokeWidth="1.5"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 25 + i * 3, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  style={{
                    transformOrigin: `${50 + i * 20}% ${45 + i * 15}%`,
                  }}
                />
              ))}

              {/* Линии */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={`${10 + i * 12}%`}
                  y1="0%"
                  x2={`${10 + i * 12}%`}
                  y2="100%"
                  stroke={`rgba(16, 185, 129, ${0.15 - index * 0.02})`}
                  strokeWidth="1"
                  strokeDasharray="10 5"
                  animate={{
                    strokeDashoffset: [0, 100],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    strokeDashoffset: { duration: 5 + i, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
              ))}
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
