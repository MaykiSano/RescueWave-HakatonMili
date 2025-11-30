import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle3D {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

interface Interactive3DParticlesProps {
  mousePosition: { x: number; y: number };
}

export function Interactive3DParticles({ mousePosition }: Interactive3DParticlesProps) {
  const [particles, setParticles] = useState<Particle3D[]>([]);

  useEffect(() => {
    const newParticles: Particle3D[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      size: Math.random() * 6 + 2,
      color: i % 3 === 0 ? 'rgba(16, 185, 129, 0.6)' : i % 3 === 1 ? 'rgba(52, 211, 153, 0.4)' : 'rgba(167, 243, 208, 0.3)',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        const offsetX = (mousePosition.x - 50) * (particle.z / 50);
        const offsetY = (mousePosition.y - 50) * (particle.z / 50);
        const scale = 0.5 + (particle.z / 100);
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              filter: `blur(${particle.z / 30}px)`,
            }}
            animate={{
              x: offsetX,
              y: offsetY,
              scale: [scale, scale * 1.2, scale],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        );
      })}
    </div>
  );
}