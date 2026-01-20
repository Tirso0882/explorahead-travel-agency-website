/**
 * 3D Character Illustration Component
 *
 * Renders 3D character models with Framer Motion animations.
 * Currently supports SVG-based isometric illustrations with fallback to images.
 * Ready to integrate actual 3D models from Spline, Three.js, or Blender exports.
 *
 * @component
 * @example
 * <ThreeDCharacter
 *   variant="chat"
 *   animated={true}
 *   className="w-64 h-64"
 * />
 */

"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

type CharacterVariant = "chat" | "planning" | "travel" | "explorer" | "guide";

interface ThreeDCharacterProps {
  variant: CharacterVariant;
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

const characterConfigs: Record<CharacterVariant, { color: string; icon: string }> = {
  chat: {
    color: "#1a365d",
    icon: "💬",
  },
  planning: {
    color: "#2d5a45",
    icon: "🗺️",
  },
  travel: {
    color: "#c4785a",
    icon: "🧳",
  },
  explorer: {
    color: "#d4a574",
    icon: "🧭",
  },
  guide: {
    color: "#1a365d",
    icon: "👋",
  },
};

export function ThreeDCharacter({
  variant,
  animated = true,
  className = "w-48 h-48",
  style = {},
  delay = 0,
}: ThreeDCharacterProps) {
  const config = characterConfigs[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={`relative flex items-center justify-center ${className}`}
      style={style}
    >
      {/* 3D Character Placeholder Container */}
      <motion.div
        animate={animated ? { y: [-5, 5, -5] } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-full w-full"
      >
        {/* Background Shape */}
        <div
          className="absolute inset-0 rounded-3xl opacity-20 blur-xl"
          style={{ backgroundColor: config.color }}
        />

        {/* Character Illustration (Placeholder) */}
        <div
          className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(135deg, ${config.color}20 0%, ${config.color}40 100%)`,
          }}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

          {/* Icon/Emoji Placeholder */}
          <div
            className="animate-bounce text-6xl drop-shadow-lg md:text-7xl"
            style={{
              animationDuration: "3s",
            }}
          >
            {config.icon}
          </div>

          {/* Rotation Animation Layer */}
          {animated && ["travel", "planning"].includes(variant) && (
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-3xl border-2 border-white/20"
              style={{ perspective: "1000px" }}
            />
          )}
        </div>
      </motion.div>

      {/* TODO: Replace with actual 3D models
       * SPLINE INTEGRATION:
       * - Import Spline viewer component
       * - Load .spline file from public/3d-models/
       * - Configure scene lighting, camera angle, interactive behaviors
       *
       * THREE.JS INTEGRATION:
       * - Use Three.js GLTFLoader for .glb/.gltf models
       * - Set up scene, camera, renderer
       * - Apply materials, lighting, and shadows
       * - Implement interaction handlers
       *
       * BLENDER EXPORT:
       * - Export from Blender as .glb (optimized binary format)
       * - Target file size: <200KB per model
       * - Include textures baked into materials
       * - Configure isometric view (position camera at 45° angle)
       * - Set up warm golden-hour lighting (#FDB462, #FFC966)
       *
       * CHARACTER SPECIFICATIONS:
       * - Style: Isometric 3D illustration
       * - Animation: Idle breathing/floating motion (3s loop)
       * - Color scheme: Brand palette (ocean, gold, terracotta, forest, sand)
       * - Perspective: 45° isometric angle
       * - Light: Warm golden hour (CCT 3500K-4000K)
       */}
    </motion.div>
  );
}
