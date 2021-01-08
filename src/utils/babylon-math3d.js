import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';

// ------- Временные и постоянные объекты ---------

const tmpVector1 = Vector3.Zero();
const tmpVector2 = Vector3.Zero();
const tmpVector3 = Vector3.Zero();
const tmpQuaternion1 = new Quaternion();
const startRotation = new Vector3(0, 1, 0);

// ---------------------------

/**
 *
 * @param v1
 * @param v2
 * @param ref
 */
export function setFromUnitVectorsToRef(v1, v2, ref) {
  const angle = Math.acos(Vector3.Dot(v1, v2));
  Vector3.CrossToRef(v1, v2, tmpVector1);
  Quaternion.RotationAxisToRef(tmpVector1, angle, ref);
}

// ---------------------------

/**
 *
 * @param mesh
 * @param normal
 */
export function setMeshRotationByNormalAndDirection(mesh, normal) {
  Vector3.CrossToRef(startRotation, normal, tmpVector1);
  Vector3.CrossToRef(tmpVector1, normal, tmpVector2);
  Vector3.RotationFromAxisToRef(tmpVector2.negate(), normal, tmpVector1, tmpVector3);
  Quaternion.RotationYawPitchRollToRef(tmpVector3.y, tmpVector3.x, tmpVector3.z, mesh.rotationQuaternion);
}

// ---------------------------

/**
 *
 * @param q
 * @param prevNormal
 * @param nextNormal
 * @param ref
 */
export function rotateQuaternionByNormalChangeToRef(q, prevNormal, nextNormal, ref) {
  if (!prevNormal) {
    Quaternion.FromEulerVectorToRef(nextNormal, ref);
  } else {
    setFromUnitVectorsToRef(prevNormal, nextNormal, tmpQuaternion1);

    if (!(Number.isNaN(tmpQuaternion1.x))) {
      tmpQuaternion1.multiplyToRef(q, ref);
    }
  }
}

// ---------------------------

export function setDirectionToRef(normal, quaternion) {
  quaternion = quaternion || new Quaternion();

  tmpVector1.set(normal.z, 0, -normal.x).normalize();
  const radians = Math.acos(normal.y);

  quaternion = Quaternion.RotationAxisToRef(tmpVector1, radians, quaternion);

  return quaternion;
}
