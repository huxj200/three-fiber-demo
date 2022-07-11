import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
    const gltf = useGLTF(props.children.urn)

    return (
        <primitive object={gltf.scene} />
    )
}
