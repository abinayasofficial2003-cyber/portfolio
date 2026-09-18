"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberVault3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 280;
    const height = container.clientHeight || 180;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Cryptographic Shield / Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0xf13024,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreWireMesh = new THREE.Mesh(coreGeo, coreWireMat);
    rootGroup.add(coreWireMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(0.7, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6e38f7,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // 2. Concentric Cipher Rings
    const ring1Geo = new THREE.TorusGeometry(1.8, 0.02, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xf13024,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 90);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    rootGroup.add(ring2);

    // 3. Floating Cryptographic Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePos, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xff6b52,
      size: 0.06,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle rotation
      coreWireMesh.rotation.x = elapsedTime * 0.35;
      coreWireMesh.rotation.y = elapsedTime * 0.5;

      innerMesh.rotation.x = -elapsedTime * 0.55;
      innerMesh.rotation.z = elapsedTime * 0.4;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.x = -elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.15;

      // Smooth mouse follow
      rootGroup.rotation.y += (targetX - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (-targetY - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreWireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[140px] sm:h-[160px] rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-[inset_0_0_20px_rgba(241,48,36,0.1)] flex items-center justify-center group">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* Cyber Reticles & Overlay HUD */}
      <div className="absolute inset-0 pointer-events-none p-2.5 flex flex-col justify-between text-[10px] font-mono select-none">
        <div className="flex justify-between items-center text-white/50">
          <span className="flex items-center gap-1.5 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            TLS_1.3 // AES-256-GCM
          </span>
          <span className="text-white/40">ENC_TUNNEL: READY</span>
        </div>

        <div className="flex justify-between items-center text-white/40 text-[9px]">
          <span>CIPHER_ROT: ACTIVE</span>
          <span className="text-emerald-400/90 font-semibold">● SECURE UPLINK</span>
        </div>
      </div>

      {/* Crosshair accents */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-accent/60 pointer-events-none" />
      <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent/60 pointer-events-none" />
      <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-accent/60 pointer-events-none" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-accent/60 pointer-events-none" />
    </div>
  );
}
