import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface Interactive3DCardProps {
  children: ReactNode;
  className?: string;
}

export function Interactive3DCard({ children, className = '' }: Interactive3DCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Светящийся эффект при наведении */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              transform: 'translateZ(-50px)',
            }}
          />
        )}

        {/* Основной контент */}
        <div
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>

        {/* Блики */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"
              style={{
                transform: 'translateZ(30px)',
                left: `${rotateY * 5}%`,
                top: `${rotateX * 5}%`,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-500/30 rounded-full blur-2xl"
              style={{
                transform: 'translateZ(20px)',
                right: `${-rotateY * 5}%`,
                bottom: `${-rotateX * 5}%`,
              }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
