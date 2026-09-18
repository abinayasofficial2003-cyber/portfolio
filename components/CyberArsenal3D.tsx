"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface CyberArsenal3DProps {
  activeCategory: string;
  className?: string;
}

export default function CyberArsenal3D({
  activeCategory,
  className = "",
}: CyberArsenal3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCategoryRef = useRef(activeCategory);

  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Geodesic Cyber Shield (Crimson Red Theme)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xf13024,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner glowing core
    const innerGeo = new THREE.OctahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Core point vertices
    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const corePoints = new THREE.Points(coreGeo, pointsMat);
    group.add(corePoints);

    // 2. Multi-axial Gyroscopic Rings
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf13024,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    group.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(3.1, 0.012, 16, 100);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.y = Math.PI / 2.5;
    group.add(ring3);

    // 3. Orbiting Tactical Satellites / Sensor Nodes (9 Nodes)
    const nodeGeo = new THREE.SphereGeometry(0.11, 16, 16);
    const nodeColors = [
      0xf13024, 0xec4899, 0xa855f7, 0x38bdf8, 0x10b981, 0xf59e0b, 0xf13024,
      0x6366f1, 0x14b8a6,
    ];
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < 9; i++) {
      const nodeMat = new THREE.MeshBasicMaterial({ color: nodeColors[i] });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      group.add(node);
      nodes.push(node);
    }

    // 4. Background Starfield / Floating Cyber Dust (120 points)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 120;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 14;
      starPos[i + 1] = (Math.random() - 0.5) * 14;
      starPos[i + 2] = (Math.random() - 0.5) * 10;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse Drag & Inertia Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // Touch Interaction
    let touchX = 0;
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchX;
        const deltaY = e.touches[0].clientY - touchY;
        targetRotY += deltaX * 0.009;
        targetRotX += deltaY * 0.009;
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Inertial smoothing
      group.rotation.y += (targetRotY - group.rotation.y) * 0.08;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.08;

      if (!isDragging) {
        targetRotY += 0.003;
        targetRotX = Math.sin(elapsedTime * 0.25) * 0.15;
      }

      // Core rotation
      coreMesh.rotation.y = elapsedTime * 0.4;
      coreMesh.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;
      innerMesh.rotation.y = -elapsedTime * 0.6;
      innerMesh.rotation.z = elapsedTime * 0.3;

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.12;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Starfield subtle rotation
      starField.rotation.y = elapsedTime * 0.02;

      // Orbit the 9 domain nodes
      nodes.forEach((node, idx) => {
        const angle = elapsedTime * 0.7 + (idx * Math.PI * 2) / 9;
        const ringChoice = idx % 3;
        const radius = ringChoice === 0 ? 2.4 : ringChoice === 1 ? 2.8 : 3.1;
        const targetRing =
          ringChoice === 0 ? ring1 : ringChoice === 1 ? ring2 : ring3;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const pos = new THREE.Vector3(x, y, 0);
        pos.applyEuler(targetRing.rotation);
        node.position.copy(pos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      {/* Cyber Reticles */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-[#f13024]/70 pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f13024] animate-ping" />
        <span>3D CYBER REACTOR // ONLINE</span>
      </div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30 pointer-events-none uppercase">
        Drag to Rotate
      </div>
    </div>
  );
}
