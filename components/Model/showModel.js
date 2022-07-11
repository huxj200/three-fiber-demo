import Model from './Model'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, GizmoHelper, GizmoViewcube } from '@react-three/drei'


export default function ShowModel(props) {
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
                <Model>{{ urn: props.children.modelUrn }}</Model>
            </Canvas>
        </div >
    )
}
