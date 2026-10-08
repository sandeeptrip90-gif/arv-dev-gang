import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 3,
  padding = 100,
  className = '',
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < maxDist) {
        setIsHovered(true);
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
      } else if (isHovered) {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength, padding, isHovered, disabled]);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
