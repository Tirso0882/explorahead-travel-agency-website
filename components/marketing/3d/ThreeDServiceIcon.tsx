/**
 * 3D Service Icon Component
 *
 * Renders 3D service icons with rotate on hover animation.
 * Currently uses SVG-based isometric design with fallback structure.
 * Ready for Spline or Three.js 3D model integration.
 *
 * @component
 * @example
 * <ThreeDServiceIcon variant="transport" animated={true} />
 */

"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

type ServiceIconVariant =
  | "transport"
  | "accommodation"
  | "dailyPlanning"
  | "experiences"
  | "support";

interface ThreeDServiceIconProps {
  variant: ServiceIconVariant;
  animated?: boolean;
  className?: string;
  style?: CSSProperties;
}

const serviceConfigs: Record<
  ServiceIconVariant,
  {
    color: string;
    icon: string;
    label: string;
  }
> = {
  transport: {
    color: "#1a365d",
    icon: "✈️",
    label: "Transport",
  },
  accommodation: {
    color: "#2d5a45",
    icon: "🏨",
    label: "Accommodation",
  },
  dailyPlanning: {
    color: "#c4785a",
    icon: "📅",
    label: "Daily Planning",
  },
  experiences: {
    color: "#d4a574",
    icon: "❤️",
    label: "Experiences",
  },
  support: {
    color: "#1a365d",
    icon: "📱",
    label: "Support",
  },
};

export function ThreeDServiceIcon({
  variant,
  animated = true,
  className = "w-20 h-20",
  style = {},
}: ThreeDServiceIconProps) {
  const config = serviceConfigs[variant];

  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-2xl shadow-lg ${className}`}
      style={{
        ...style,
        backgroundColor: config.color,
        perspective: "1000px",
      }}
      whileHover={animated ? { rotateY: 360 } : {}}
      transition={
        animated
          ? {
              duration: 0.8,
              ease: "easeOut",
            }
          : {}
      }
    >
      {/* Gradient overlay for 3D depth effect */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${config.color}80 0%, ${config.color}40 100%)`,
          zIndex: 1,
        }}
      />

      {/* Icon */}
      <span className="relative z-10 text-3xl drop-shadow-lg">{config.icon}</span>

      {/* Shine/Highlight Effect */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
          zIndex: 2,
        }}
      />

      {/* 
        TODO: Replace with actual 3D service icon model
        
        Expected deliverables:
        - Isometric 3D icons matching service type
        - Color matching brand palette
        - Size: 80x80px optimal for badge containers
        - Format: GLTF/GLB with optimize export
        - Animations: Idle rotate on hover, subtle floating motion
        
        Integration Options:
        1. Spline Web Player:
           - Create isometric 3D shapes in Spline
           - Export as Web embed
           - Integrate into component with iframe or canvas mount
           
        2. Blender GLTF Export:
           - Model simple geometric 3D icon
           - Bake textures for reduced file size (<100KB)
           - Export as .glb with WebGL optimization
           - Load with Three.js GLTFLoader
           
        3. Three.js Custom:
           - Build with BoxGeometry, CylinderGeometry, or custom meshes
           - Apply materials with color from config
           - Implement rotation animation with RAF loop
           
        Current Placeholder:
        - Uses emoji icons with shadow/gradient effects
        - Demonstrates hover rotation capability
        - Ready for model file replacement
        - Color and sizing framework in place
      */}
    </motion.div>
  );
}
