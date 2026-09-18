"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberOrb3D() {
  const containerRef = useRef<HTMLDivElement>(null);

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

    // WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
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
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner glowing core
    const innerGeo = new THREE.OctahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x4a22bd,
      wireframe: false,
      transparent: true,
      opacity: 0.35,
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

    // 2. Concentric Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf13024,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe838cc,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    group.add(ring2);

    // 3. Orbiting Nodes (Web, API, Mobile, Network, Cloud)
    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeColors = [0xf13024, 0xe838cc, 0xffffff, 0xf13024, 0x4a22bd];
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < 5; i++) {
      const nodeMat = new THREE.MeshBasicMaterial({ color: nodeColors[i] });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      group.add(node);
      nodes.push(node);
    }

    // Mouse drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

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
        group.rotation.y += deltaX * 0.008;
        group.rotation.x += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

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

      if (!isDragging) {
        group.rotation.y = elapsedTime * 0.3;
        group.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2;
      }

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.1;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Orbit nodes
      nodes.forEach((node, idx) => {
        const angle = elapsedTime * 0.8 + (idx * Math.PI * 2) / 5;
        const radius = idx % 2 === 0 ? 2.5 : 2.9;
        const currentRing = idx % 2 === 0 ? ring1 : ring2;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const pos = new THREE.Vector3(x, y, 0);
        pos.applyEuler(currentRing.rotation);
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
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[220px] sm:h-[280px] xl:h-[340px] flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/40 tracking-wider uppercase pointer-events-none whitespace-nowrap">
        Drag to Rotate
      </div>
    </div>
  );
}
