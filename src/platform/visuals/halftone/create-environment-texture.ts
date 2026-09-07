import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

let sharedRoomEnvironment: RoomEnvironment | null = null;

function getSharedRoomEnvironment(): RoomEnvironment {
  if (sharedRoomEnvironment === null) {
    sharedRoomEnvironment = new RoomEnvironment();
  }
  return sharedRoomEnvironment;
}

// The PMREM room environment the solid materials reflect. Caller owns
// disposal of the returned texture.
export function createEnvironmentTexture(renderer: THREE.WebGLRenderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const environmentTexture = pmremGenerator.fromScene(
    getSharedRoomEnvironment(),
    0.04,
  ).texture;
  pmremGenerator.dispose();
  return environmentTexture;
}
