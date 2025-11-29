import { motion } from 'motion/react';

interface FloatingIslandsProps {
  mousePosition: { x: number; y: number };
}

export function FloatingIslands({ mousePosition }: FloatingIslandsProps) {
  const islands = [
    { size: 120, x: 15, y: 20, depth: 0.8 },
    { size: 90, x: 70, y: 15, depth: 0.5 },
    { size: 110, x: 40, y: 60, depth: 0.7 },
    { size: 80, x: 80, y: 70, depth: 0.4 },
    { size: 100, x: 25, y: 80, depth: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {islands.map((island, index) => {
        const offsetX = (mousePosition.x - 50) * island.depth * 0.5;
        const offsetY = (mousePosition.y - 50) * island.depth * 0.5;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${island.x}%`,
              top: `${island.y}%`,
              width: island.size,
              height: island.size,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: offsetX,
              y: [offsetY, offsetY - 20, offsetY],
            }}
            transition={{
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            {/* Остров с градиентом */}
            <div
              className="relative w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, 
                  rgba(16, 185, 129, 0.3), 
                  rgba(5, 150, 105, 0.2), 
                  rgba(4, 120, 87, 0.1))`,
                boxShadow: `0 ${island.depth * 30}px ${island.depth * 60}px rgba(16, 185, 129, 0.2)`,
                filter: `blur(${(1 - island.depth) * 2}px)`,
              }}
            >
              {/* Внутреннее свечение */}
              <motion.div
                className="absolute inset-2 rounded-full bg-emerald-400/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />

              {/* Вращающиеся кольца */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: 20 + index * 5, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Точки на орбите */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px',
                  }}
                  animate={{
                    rotate: [i * 120, i * 120 + 360],
                    x: Math.cos((i * 120 * Math.PI) / 180) * (island.size / 2 + 10),
                    y: Math.sin((i * 120 * Math.PI) / 180) * (island.size / 2 + 10),
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>

            {/* Энергетические линии связи */}
            {index < islands.length - 1 && (
              <svg
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '200%',
                  height: '200%',
                  overflow: 'visible',
                }}
              >
                <motion.line
                  x1="0"
                  y1="0"
                  x2={(islands[index + 1].x - island.x) * 10}
                  y2={(islands[index + 1].y - island.y) * 10}
                  stroke="rgba(16, 185, 129, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  animate={{
                    strokeDashoffset: [0, -100],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
