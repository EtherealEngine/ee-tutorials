import { ECS } from '@etherealengine/ecs'
import { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'
import { GeometryTypeEnum } from '@etherealengine/engine/src/scene/constants/GeometryTypeEnum'
import { PhysicsSystem } from '@etherealengine/spatial'
import { NameComponent } from '@etherealengine/spatial/src/common/NameComponent'
import { VisibleComponent } from '@etherealengine/spatial/src/renderer/components/VisibleComponent'
import { TransformComponent } from '@etherealengine/spatial/src/transform/components/TransformComponent'
import { Vector3 } from 'three'

// Define our component
export const BasicsComponent = ECS.defineComponent({
  name: 'ee.tutorial.BasicsComponent',
  jsonID: 'EE_tutorial_basics',
  onInit: () => { return { initialized: false } }
})

// Define our query
const basicsQuery = ECS.defineQuery([BasicsComponent])

const execute = () => {
  for (const entity of basicsQuery()) {
    let { initialized } = ECS.getMutableComponent(entity, BasicsComponent)
    if (initialized.value) continue
    initialized.set(true)

    ECS.setComponent(entity, NameComponent, 'ee.tutorial.basics-entity')
    ECS.setComponent(entity, VisibleComponent)
    ECS.setComponent(entity, TransformComponent, { position: new Vector3(0, 1, 0) })
    ECS.setComponent(entity, PrimitiveGeometryComponent, { geometryType: GeometryTypeEnum.SphereGeometry })
  }
}

// Define our system
export const BasicsSystem = ECS.defineSystem({
  uuid: 'ee.tutorial.HelloSystem',
  execute: execute,
  insert: { after: PhysicsSystem }
})

