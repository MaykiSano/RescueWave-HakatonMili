import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
  active: boolean;
}

interface NeuralNetworkProps {
  mousePosition: { x: number; y: number };
}

export function NeuralNetwork({ mousePosition }: NeuralNetworkProps) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Создаём узлы нейронной сети
    const newNodes: Node[] = [];
    const layers = [5, 7, 7, 5]; // 4 слоя
    
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          x: (layerIndex * 100) / (layers.length - 1),
          y: ((i + 1) * 100) / (nodeCount + 1),
          connections: [],
          active: Math.random() > 0.5,
        });
      }
    });

    // Создаём связи между слоями
    let nodeIndex = 0;
    layers.forEach((nodeCount, layerIndex) => {
      if (layerIndex < layers.length - 1) {
        const nextLayerStart = nodeIndex + nodeCount;
        for (let i = 0; i < nodeCount; i++) {
          for (let j = 0; j < layers[layerIndex + 1]; j++) {
            if (Math.random() > 0.3) {
              newNodes[nodeIndex + i].connections.push(nextLayerStart + j);
            }
          }
        }
      }
      nodeIndex += nodeCount;
    });

    setNodes(newNodes);

    // Периодически меняем активные узлы
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.4,
      })));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/30 to-black" />

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="neural-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Рисуем связи */}
        {nodes.map((node, index) =>
          node.connections.map((targetIndex) => {
            const target = nodes[targetIndex];
            const isActive = node.active && target.active;
            
            return (
              <motion.line
                key={`${index}-${targetIndex}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={isActive ? 'rgba(16, 185, 129, 0.6)' : 'rgba(16, 185, 129, 0.15)'}
                strokeWidth={isActive ? '2' : '1'}
                filter="url(#neural-glow)"
                animate={{
                  opacity: isActive ? [0.4, 1, 0.4] : 0.2,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            );
          })
        )}

        {/* Рисуем узлы */}
        {nodes.map((node, index) => {
          const offsetX = (mousePosition.x - 50) * 0.3;
          const offsetY = (mousePosition.y - 50) * 0.3;
          
          return (
            <g key={index}>
              {/* Пульсирующий круг для активных узлов */}
              {node.active && (
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r="15"
                  fill="rgba(16, 185, 129, 0.2)"
                  filter="url(#neural-glow)"
                  animate={{
                    r: [15, 25, 15],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
              
              {/* Основной узел */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.active ? '8' : '5'}
                fill={node.active ? 'rgba(16, 185, 129, 0.9)' : 'rgba(52, 211, 153, 0.4)'}
                filter="url(#neural-glow)"
                animate={{
                  cx: `${node.x + offsetX * 0.1}%`,
                  cy: `${node.y + offsetY * 0.1}%`,
                  scale: node.active ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  cx: { type: 'spring', stiffness: 50, damping: 20 },
                  cy: { type: 'spring', stiffness: 50, damping: 20 },
                  scale: { duration: 1.5, repeat: Infinity },
                }}
              />

              {/* Внутреннее ядро */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.active ? '4' : '2'}
                fill="rgba(255, 255, 255, 0.8)"
                animate={{
                  cx: `${node.x + offsetX * 0.1}%`,
                  cy: `${node.y + offsetY * 0.1}%`,
                  opacity: node.active ? [0.8, 1, 0.8] : 0.4,
                }}
                transition={{
                  cx: { type: 'spring', stiffness: 50, damping: 20 },
                  cy: { type: 'spring', stiffness: 50, damping: 20 },
                  opacity: { duration: 1, repeat: Infinity },
                }}
              />
            </g>
          );
        })}

        {/* Импульсы по связям */}
        {nodes.map((node, index) =>
          node.active && node.connections.map((targetIndex) => {
            const target = nodes[targetIndex];
            if (!target.active) return null;
            
            return (
              <motion.circle
                key={`pulse-${index}-${targetIndex}`}
                r="3"
                fill="rgba(16, 185, 129, 1)"
                filter="url(#neural-glow)"
                animate={{
                  cx: [`${node.x}%`, `${target.x}%`],
                  cy: [`${node.y}%`, `${target.y}%`],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear',
                }}
              />
            );
          })
        )}
      </svg>

      {/* Информационные панели */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`info-${i}`}
          className="absolute px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs text-emerald-300/70 font-mono backdrop-blur-sm"
          style={{
            left: `${15 + i * 35}%`,
            top: `${85}%`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {i === 0 && 'LAYER INPUT'}
          {i === 1 && 'PROCESSING...'}
          {i === 2 && 'OUTPUT READY'}
        </motion.div>
      ))}

      {/* Темный оверлей */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
