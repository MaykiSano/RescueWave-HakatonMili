import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  x: number;
  y: number;
  name: string;
  active: boolean;
}

export function AnimatedMapBackground() {
  const [locations, setLocations] = useState<Location[]>([
    { x: 20, y: 30, name: 'Баку', active: true },
    { x: 45, y: 25, name: 'Тбилиси', active: false },
    { x: 70, y: 35, name: 'Ереван', active: true },
    { x: 35, y: 55, name: 'Анкара', active: false },
    { x: 60, y: 60, name: 'Тегеран', active: true },
    { x: 80, y: 45, name: 'Ашхабад', active: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocations((prev) =>
        prev.map((loc) => ({
          ...loc,
          active: Math.random() > 0.5,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950 to-black" />
      
      {/* Анимированная сетка */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="0.5"
              animate={{
                strokeDashoffset: [0, 100],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Анимированные линии широты/долготы */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`lat-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
          style={{ top: `${15 + i * 15}%` }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`lon-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
          style={{ left: `${10 + i * 12}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Точки геолокации */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Пульсирующие круги */}
          {location.active && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/30"
                style={{ width: '60px', height: '60px', left: '-30px', top: '-30px' }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-400/40"
                style={{ width: '40px', height: '40px', left: '-20px', top: '-20px' }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2 + 0.5,
                }}
              />
            </>
          )}

          {/* Маркер */}
          <motion.div
            className={`relative z-10 ${
              location.active
                ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'bg-emerald-700/50 shadow-md shadow-emerald-700/30'
            } rounded-full p-2`}
            animate={{
              scale: location.active ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <MapPin size={16} className="text-white" />
          </motion.div>

          {/* Название локации */}
          <motion.div
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-emerald-300/70 bg-black/60 px-2 py-1 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: location.active ? 1 : 0.5 }}
          >
            {location.name}
          </motion.div>
        </div>
      ))}

      {/* Линии связи между активными точками */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {locations.map((loc1, i) =>
          locations.slice(i + 1).map((loc2, j) => {
            if (loc1.active && loc2.active) {
              return (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={`${loc1.x}%`}
                  y1={`${loc1.y}%`}
                  x2={`${loc2.x}%`}
                  y2={`${loc2.y}%`}
                  stroke="rgba(16, 185, 129, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Плавающие частицы данных */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Эффект сканирования */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-lg shadow-emerald-400/50"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Темный оверлей для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
    </div>
  );
}
