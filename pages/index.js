import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../components/Model/Model'
import { OrbitControls, GizmoHelper, GizmoViewcube } from '@react-three/drei'


export default function index() {
  return (
    <div>
      <Canvas style={{ position: 'absolute', width: '100%', height: '100%' }}>
        < ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <GizmoHelper
          alignment='bottom-right' //widget alignment within scene
          margin={[80, 80]}
        >
          <GizmoViewcube />
        </GizmoHelper>
        <Model>{{ urn: "https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.gltf" }}</Model>
      </Canvas>
    </div >
  )
}
