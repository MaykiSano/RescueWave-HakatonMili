import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function EnergyParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/20 to-emerald-950/30" />

      {/* Энергетические частицы */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.8)' : 'rgba(16, 185, 129, 0.8)'
            }, transparent)`,
            boxShadow: `0 0 ${particle.size * 3}px ${
              Math.random() > 0.5 ? 'rgba(251, 146, 60, 0.5)' : 'rgba(16, 185, 129, 0.5)'
            }`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0, 1, 0.5, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Энергетические волны */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            borderColor: i % 2 === 0 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(16, 185, 129, 0.2)',
          }}
          animate={{
            width: ['0px', '800px'],
            height: ['0px', '800px'],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Сетка энергии */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern
            id="energy-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <motion.circle
              cx="30"
              cy="30"
              r="1"
              fill="rgba(251, 146, 60, 0.8)"
              animate={{
                r: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#energy-grid)" />
      </svg>

      {/* Голографические линии */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`holo-${i}`}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear',
          }}
        />
      ))}

      {/* Темный оверлей */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
