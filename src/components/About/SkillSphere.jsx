import React, { useEffect, useRef, useState } from 'react';
import { TextureLoader, Vector3, MeshStandardMaterial, PlaneGeometry, MeshBasicMaterial, DoubleSide } from 'three';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';

const Earth = () => {
  const texture = useLoader(TextureLoader, 'src/Assets/earth_texture_2.jpg');
  return (
    <mesh>
      <sphereGeometry args={[1.1, 256, 256]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const SkillSphere = ({ image, position }) => {
  const groupRef = React.useRef(); 
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Earth/>
      <SkillImage image={image} position={position} />
    </group>
  )
};

const SkillImage = ({ image, position }) => {
  const texture = useLoader(TextureLoader, image);
  const geometry = new PlaneGeometry(0.65, 0.65);
  const material = new MeshBasicMaterial({ map: texture, side: DoubleSide, transparent: true });

  return <mesh position={position} geometry={geometry} material={material} />;
};

const Camera = () => {
  const { camera, size } = useThree();
  const aspect = size.width / size.height;

  React.useEffect(() => {
    camera.fov = 50;
    camera.aspect = aspect;
    camera.near = 0.1;
    camera.far = 100;
    camera.position.z = 6;
    camera.updateProjectionMatrix();
  }, [camera, aspect]);

  return null;
}

const SkillsScene = () => {
  const skills = [
    { skill: 'Golang', image: 'src/Assets/skills/golang.png' },
    { skill: 'Nodejs', image: 'src/Assets/skills/nodejs.png' },
    { skill: 'Mysql', image: 'src/Assets/skills/mysql.png' },
    { skill: 'Mongodb', image: 'src/Assets/skills/mongo.png' },
    { skill: 'Redis', image: 'src/Assets/skills/redis.png' },
    { skill: 'Kafka', image: 'src/Assets/skills/kafka.png' },
    { skill: 'RabbitMQ', image: 'src/Assets/skills/rabbitmq.png' },
    { skill: 'AWS', image: 'src/Assets/skills/aws.png' },
    { skill: 'ReactJS', image: 'src/Assets/skills/reactjs.svg' },
  ];

  return (
    <Canvas>
      <Camera />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Earth />
      {skills.map((skill, index) => {
        const randomPosition = [
          2 * Math.cos((index * 360 / skills.length) * Math.PI / 180) + (Math.random() - 0.5),
          2 * Math.sin((index * 360 / skills.length) * Math.PI / 180) + (Math.random() - 0.5),
          -1 + Math.random() * 2,
        ];
        return (
          <SkillSphere 
            key={index} 
            image={skill.image}
            position={randomPosition} 
          />
        );
      })}
    </Canvas>
  );
};

export default SkillsScene;