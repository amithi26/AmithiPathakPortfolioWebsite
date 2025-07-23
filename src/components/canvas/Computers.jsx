import {Suspense, useEffect, useState} from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useRef } from 'react';


const Computers = ({isMobile, isNarrowScreen}) => {
  const computer = useGLTF('desktop_pc/website_figure.glb')
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.02 + (isMobile ? -6.5 : -4.33);
    }
  });

  // Determine scale and position based on screen size
  const getScale = () => {
    if (isMobile) return .9;
    if (isNarrowScreen) return .95;
    return 0.83;
  };

  const getPosition = () => {
    if (isMobile) return [0, 1.5, -.9];
    if (isNarrowScreen) return [6, -1.15, .1];
    return [12.5, 0, 1];
  };

  return (
    <>
      <hemisphereLight intensity={0.8} groundColor="#b1b1b1" skyColor="#ffffff"/>
      <ambientLight intensity={0.5} />
      <pointLight intensity={125} position={isMobile ? [7, 10, 20] : [20, 15, 20]} color="#220dde" decay={.8} distance={30} />
      <pointLight intensity={100} position={isMobile ? [20, 2, 20] : [25, 5, 10]} color="#220dde" decay={.8} distance={30}/>
      <pointLight intensity={50} position={isMobile ? [-10, 0, 20] : [-15, 1.5, 10]} color="#ce4500" decay={1.5} />
      <spotLight
        position={[8, 10, 15]}
        angle={0.3}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <Environment 
        preset="sunset"
        environmentIntensity={.05}
        backgroundIntensity={1}
      />
      <mesh ref={meshRef}>
        <primitive 
          object={computer.scene}
          scale = {getScale()}
          position = {getPosition()}
          rotation = {isMobile ? [.5, 1.3, -0.05] : [.5, 1.3, -0.15]}/>
      </mesh>
    </>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    // Mobile detection
    const mobileQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mobileQuery.matches);
    
    // Narrow screen detection (for split screen)
    const narrowQuery = window.matchMedia('(max-aspect-ratio: 16/9)');
    setIsNarrowScreen(narrowQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleNarrowChange = (event) => setIsNarrowScreen(event.matches);
    
    mobileQuery.addEventListener('change', handleMobileChange);
    narrowQuery.addEventListener('change', handleNarrowChange);
    
    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange);
      narrowQuery.removeEventListener('change', handleNarrowChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{
        position: isMobile ? [15, 3, 5] : isNarrowScreen ? [12, 3, 5] : [20, -5, 5], 
        fov: isMobile ? 35 : isNarrowScreen ? 30 : 25
      }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} isNarrowScreen={isNarrowScreen}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;