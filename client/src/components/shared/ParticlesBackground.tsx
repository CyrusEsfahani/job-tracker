// src/components/shared/ParticlesBackground.tsx
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 30 },
            color: { value: "#0d9488" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              color: "#059669",
              opacity: 0.3,
              distance: 200
            },
            move: {
              enable: true,
              speed: 1.5,
              outModes: "bounce"
            }
          }
        }}
      />
    </div>
  );
}