import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, applyProps, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  useGLTF,
  Decal,
} from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import style from "./styles.module.css";

export function Soon() {
  const [degraded, degrade] = useState(false);
  return (
    <div className={style.soon}>
      <Suspense fallback={"Грузица"}>
        <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
          <Porsche
            scale={3}
            position={[-0.5, -0.18, 0]}
            rotation={[0, Math.PI / 5, 0]}
          />
          {/** PerfMon will detect performance issues */}
          <PerformanceMonitor onDecline={() => degrade(true)} />
          {/* Renders contents "live" into a HDRI environment (scene.environment). */}
          <Environment
            frames={degraded ? 1 : Infinity}
            resolution={256}
            background
            blur={1}
          >
            <Lightformers />
          </Environment>
          <CameraRig />
        </Canvas>
      </Suspense>
    </div>
  );
}

/*
Author: Karol Miklas (https://sketchfab.com/karolmiklas)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf
Title: (FREE) Porsche 911 Carrera 4S
*/
function Porsche(props) {
  const [rotation, setRotation] = useState([0, Math.PI / 5, 0]);
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb");
  const image = new THREE.TextureLoader().load("./assets/book.jpg");
  var material = new THREE.MeshPhongMaterial({
    map: image,
  });

  console.log(material);

  /* useEffect(() => {
    let t = 0;
    setInterval(() => {
      const r = rotation;
      const s = t + 0.01;
      t++;
      if (s >= 1) {
        t;
      }
      setRotation([0, Math.PI / 5, 0]);
    }, 500);
  }, []);
 */
  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node) => node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    // @ts-ignore
    applyProps(material, {
      color: "#222",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(material, { color: "red", roughness: 0, clearcoat: 0.1 });
    applyProps(material, { envMapIntensity: 4, roughness: 0.5, metalness: 1 });
    applyProps(material, {
      envMapIntensity: 2,
      roughness: 0.45,
      metalness: 0.8,
      color: "#555",
    });
  }, [nodes, materials, material]);

  if (!Object.keys(materials).length) return null;

  return <primitive object={scene} {...props} rotation={rotation}></primitive>;
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.lookAt(0, 0, 0);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      // @ts-ignore
      (group.current.position.z += delta * 10) > 20 &&
      // @ts-ignore
      (group.current.position.z = -60)
  );
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="blue"
            colorB="black"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}
