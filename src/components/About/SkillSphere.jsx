import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React from 'react';
import { DoubleSide, MeshBasicMaterial, PlaneGeometry, TextureLoader } from 'three';
import awsIcon from "../../Assets/skills/aws.png"
import dockerIcon from "../../Assets/skills/docker.png"
import gitIcon from "../../Assets/skills/git.png"
import goIcon from "../../Assets/skills/golang.png"
import kafkaIcon from "../../Assets/skills/kafka_white.png"
import mongoIcon from "../../Assets/skills/mongo.png"
import mysqlIcon from "../../Assets/skills/mysql.png"
import nodejsIcon from "../../Assets/skills/nodejs.png"
import postgresIcon from "../../Assets/skills/postgres.png"
import rabbitIcon from "../../Assets/skills/rabbitmq.png"
import reactjsIcon from "../../Assets/skills/reactjs.png"
import redisIcon from "../../Assets/skills/redis.png"
import vscodeIcon from "../../Assets/skills/vscode.png"

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
  const geometry = new PlaneGeometry(0.4, 0.4);
  const material = new MeshBasicMaterial({ map: texture, side: DoubleSide, transparent: true });

  return <mesh position={position} geometry={geometry} material={material} />;
};

const Camera = () => {
  const { camera, size } = useThree();
  const aspect = size.width / size.height;

  React.useEffect(() => {
    camera.fov = 50;
    camera.aspect = aspect;
    camera.near = 0.5;
    camera.far = 100;
    camera.position.z = 5.5;
    camera.updateProjectionMatrix();
  }, [camera, aspect]);

  return null;
}

const SkillsScene = () => {
  const skills = [
    // Stacks
    { skill: 'Golang', image: goIcon },
    { skill: 'Nodejs', image: nodejsIcon },
    { skill: 'Mysql', image: mysqlIcon },
    { skill: 'Postgres', image: postgresIcon },
    { skill: 'Mongodb', image: mongoIcon },
    { skill: 'Redis', image: redisIcon },
    { skill: 'Kafka', image: kafkaIcon },
    { skill: 'RabbitMQ', image: rabbitIcon },
    { skill: 'AWS', image: awsIcon },
    { skill: 'ReactJS', image: reactjsIcon },

    // Tools
    { skill: 'VSCode', image: vscodeIcon },
    { skill: 'Git', image: gitIcon },
    { skill: 'Docker', image: dockerIcon },
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