import { useEffect, useRef } from 'react';

const clientLogos = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLab', logo: 'IL' },
  { name: 'FutureSystem', logo: 'FS' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'CloudNet', logo: 'CN' },
  { name: 'SmartTech', logo: 'ST' },
  { name: 'NeuralLink', logo: 'NL' },
  { name: 'QuantumEdge', logo: 'QE' },
];

export const ClientLogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 1;
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
          Trusted by Leading Companies
        </h3>
        
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-8 w-max"
            style={{ width: 'max-content' }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};