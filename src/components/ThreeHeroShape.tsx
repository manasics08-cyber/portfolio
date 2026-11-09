import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface ThreeHeroShapeProps {
  className?: string;
  size?: 'normal' | 'large';
}

export function ThreeHeroShape({ className = '', size = 'normal' }: ThreeHeroShapeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglError, setWebglError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // Scene setup
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let renderer: THREE.WebGLRenderer
    let mesh: THREE.Mesh
    let animationFrameId: number

    // Mouse coordinates for parallax tilt
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    try {
      scene = new THREE.Scene()

      const width = container.clientWidth || 450
      const height = container.clientHeight || 450

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.z = 7.5

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2

      // Create high-polish glossy green abstract shape
      // Torus knot with p=2, q=3 gives a beautiful organic sculpted curve
      const geometry = new THREE.TorusKnotGeometry(1.9, 0.62, 140, 36, 2, 3)

      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#229B4F'),
        emissive: new THREE.Color('#062410'),
        roughness: 0.18,
        metalness: 0.35,
        clearcoat: 1.0,
        clearcoatRoughness: 0.12,
        reflectivity: 0.85,
        wireframe: false,
      })

      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Lighting system
      const ambientLight = new THREE.AmbientLight(0x051a0b, 2.0)
      scene.add(ambientLight)

      // Key light: bright crisp white
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
      keyLight.position.set(5, 5, 4)
      scene.add(keyLight)

      // Vibrant neon green rim light
      const greenRimLight = new THREE.PointLight(0x4ade80, 4.5, 20)
      greenRimLight.position.set(-4, -2, 3)
      scene.add(greenRimLight)

      // Secondary emerald glow light
      const emeraldLight = new THREE.PointLight(0x3daa5c, 3.0, 15)
      emeraldLight.position.set(2, -4, 2)
      scene.add(emeraldLight)

      // Top specular highlight
      const topSpecular = new THREE.PointLight(0xdcfce7, 2.0, 15)
      topSpecular.position.set(0, 5, 2)
      scene.add(topSpecular)

      // Handle window resize
      const handleResize = () => {
        if (!container) return
        const newWidth = container.clientWidth
        const newHeight = container.clientHeight
        camera.aspect = newWidth / newHeight
        camera.updateProjectionMatrix()
        renderer.setSize(newWidth, newHeight)
      }

      window.addEventListener('resize', handleResize)

      // Mouse move listener for smooth reactive parallax
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect()
        // Normalized coordinates from -1 to 1 centered on canvas
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        mouse.targetX = x * 0.7
        mouse.targetY = y * 0.7
      }

      window.addEventListener('mousemove', handleMouseMove)

      // Render loop
      let clock = new THREE.Clock()

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate)

        const elapsedTime = clock.getElapsedTime()

        // Smooth mouse lerping
        mouse.x += (mouse.targetX - mouse.x) * 0.05
        mouse.y += (mouse.targetY - mouse.y) * 0.05

        // Gentle floating bobbing
        mesh.position.y = Math.sin(elapsedTime * 1.2) * 0.18

        // Organic rotation + mouse tilt
        mesh.rotation.x = elapsedTime * 0.25 + mouse.y * 0.8
        mesh.rotation.y = elapsedTime * 0.35 + mouse.x * 0.8
        mesh.rotation.z = Math.sin(elapsedTime * 0.4) * 0.1

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', handleMouseMove)
        cancelAnimationFrame(animationFrameId)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    } catch (err) {
      console.warn('WebGL initialization failed, using fallback:', err)
      setWebglError(true)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: size === 'large' ? '100%' : '100%',
        height: size === 'large' ? '100%' : '100%',
        minHeight: '340px',
      }}
    >
      {/* Background ambient radial green glow */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#3DAA5C]/25 blur-[90px] pointer-events-none" />
      <div className="absolute w-40 h-40 rounded-full bg-[#4ADE80]/20 blur-[60px] pointer-events-none" />

      {/* WebGL Canvas */}
      {!webglError ? (
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"
          style={{ display: 'block', outline: 'none' }}
        />
      ) : (
        /* High-fidelity Fallback: Glossy 3D Green Sculptural Shape */
        <div className="relative z-10 w-72 h-72 md:w-88 md:h-88 flex items-center justify-center animate-float-slow">
          <div className="w-full h-full rounded-3xl overflow-hidden card-dark p-2 border border-[#3DAA5C]/30 shadow-[0_0_50px_rgba(61,170,92,0.3)]">
            <img
              src="/images/shape-ref.jpg"
              alt="Glossy 3D Green Sculpture"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

