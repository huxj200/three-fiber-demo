import React from 'react'
import { Canvas } from '@react-three/fiber'
import ShowModel from '../components/Model/showModel'
import { OrbitControls, GizmoHelper, GizmoViewcube } from '@react-three/drei'


export default function index() {
  return (
    <div>
      <ShowModel>{{ modelUrn: "https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.gltf" }}</ShowModel>
    </div >
  )
}
