import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FootProps {
  ref: React.RefObject<SVGSVGElement>;
}

const RightFootprint = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg 
    ref={ref}
    width="24" 
    height="36" 
    viewBox="0 0 16 32" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className="footstep right-step"
    style={{ transform: 'rotate(90deg)' }}
  >
    <path d="M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z" />
  </svg>
));

const LeftFootprint = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg 
    ref={ref}
    width="24" 
    height="36" 
    viewBox="20 0 16 32" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className="footstep left-step"
    style={{ transform: 'rotate(90deg)' }}
  >
    <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z" />
  </svg>
));

const FootstepsAnimation: React.FC = () => {
  const leftFootRef = useRef<SVGSVGElement>(null);
  const rightFootRef = useRef<SVGSVGElement>(null);
  const ghostTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftFootRef.current || !rightFootRef.current || !ghostTrailRef.current) return;

    // River-like flowing path with gentle curves
    const flowingPath = [
      // Start at first orange circle
      { x: 200, y: 250 },    // Starting position
      { x: 250, y: 245 },    // Slight upward curve
      { x: 300, y: 240 },    // Continue gentle rise
      { x: 350, y: 245 },    // Start subtle dip
      { x: 400, y: 250 },    // Return to middle height
      // Middle section (to second circle)
      { x: 450, y: 245 },    // Begin second curve up
      { x: 500, y: 240 },    // Peak of middle curve
      { x: 550, y: 245 },    // Start descending
      { x: 600, y: 250 },    // Level at second circle
      // Final section (to third circle)
      { x: 650, y: 245 },    // Final curve begins
      { x: 700, y: 240 },    // Last gentle rise
      { x: 750, y: 245 },    // Approaching end
      { x: 800, y: 250 },    // End at third circle
    ];

    const createGhostTrail = (
      element: SVGSVGElement, 
      x: number, 
      y: number,
      rotation: number = 0
    ): void => {
      if (!ghostTrailRef.current) return;
      
      const ghost = element.cloneNode(true) as SVGSVGElement;
      ghost.style.position = 'absolute';
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
      ghost.style.transform = `rotate(${rotation + 90}deg)`;
      ghost.classList.add('ghost-trail');
      
      ghostTrailRef.current.appendChild(ghost);
      
      // Maintain more visible ghost trail
      gsap.to(ghost, {
        opacity: 0.25,  // Increased visibility
        duration: 3,    // Longer duration
        ease: "none",   // Linear fade for consistent trail
      });
    };

    const animateFootstep = (
      foot: SVGSVGElement,
      path: Array<{x: number, y: number}>,
      delay: number,
      isLeft: boolean
    ): void => {
      path.forEach((point, index) => {
        const prevPoint = index > 0 ? path[index - 1] : point;
        const nextPoint = index < path.length - 1 ? path[index + 1] : point;
        
        // Calculate rotation based on current direction of movement
        const rotation = Math.atan2(
          nextPoint.y - prevPoint.y,
          nextPoint.x - prevPoint.x
        ) * 180 / Math.PI;
        
        gsap.to(foot, {
          x: point.x + (isLeft ? -12 : 12),  // Lateral offset for left/right foot
          y: point.y + (index % 2 ? 5 : -5), // Slight vertical alternation
          rotation: rotation + 90 + (isLeft ? -15 : 15), // Angle feet slightly outward
          duration: 0.6,    // Slower, more natural step timing
          delay: delay + (index * 0.7), // More time between steps
          ease: "power2.inOut",
          onComplete: () => createGhostTrail(
            foot, 
            point.x + (isLeft ? -12 : 12),
            point.y + (index % 2 ? 5 : -5),
            rotation + (isLeft ? -15 : 15)
          ),
        });
      });
    };

    // Start animations with proper timing
    const timeline = gsap.timeline();
    
    // Animate both feet with slight offset for natural walking
    animateFootstep(leftFootRef.current, flowingPath, 0, true);
    animateFootstep(rightFootRef.current, flowingPath, 0.35, false); // Increased offset

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      <div 
        ref={ghostTrailRef} 
        className="ghost-trail-container" 
        style={{ zIndex: 50 }}
      />
      <LeftFootprint ref={leftFootRef} />
      <RightFootprint ref={rightFootRef} />
    </div>
  );
};

RightFootprint.displayName = 'RightFootprint';
LeftFootprint.displayName = 'LeftFootprint';

export default FootstepsAnimation; 