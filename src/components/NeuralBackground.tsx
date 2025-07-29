import { useEffect, useRef } from 'react';

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface NeuralConnection {
  from: number;
  to: number;
  opacity: number;
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<NeuralNode[]>([]);
  const connectionsRef = useRef<NeuralConnection[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize nodes
    const initializeNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));

      // Create connections
      connectionsRef.current = [];
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodesRef.current[i].x - nodesRef.current[j].x, 2) +
            Math.pow(nodesRef.current[i].y - nodesRef.current[j].y, 2)
          );
          if (distance < 150) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: Math.max(0, 1 - distance / 150),
            });
          }
        }
      }
    };

    initializeNodes();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodesRef.current.forEach((node) => {
        // Move towards mouse if close
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouseRef.current.x, 2) +
          Math.pow(node.y - mouseRef.current.y, 2)
        );

        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(
            mouseRef.current.y - node.y,
            mouseRef.current.x - node.x
          );
          node.vx += Math.cos(angle) * force * 0.02;
          node.vy += Math.sin(angle) * force * 0.02;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Friction
        node.vx *= 0.99;
        node.vy *= 0.99;
      });

      // Update connections
      connectionsRef.current = [];
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const distance = Math.sqrt(
            Math.pow(nodesRef.current[i].x - nodesRef.current[j].x, 2) +
            Math.pow(nodesRef.current[i].y - nodesRef.current[j].y, 2)
          );
          if (distance < 150) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: Math.max(0, 1 - distance / 150),
            });
          }
        }
      }

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        const fromNode = nodesRef.current[connection.from];
        const toNode = nodesRef.current[connection.to];

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `hsla(217, 91%, 60%, ${connection.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(217, 91%, 60%)';
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(217, 91%, 60%, 0.2)';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
