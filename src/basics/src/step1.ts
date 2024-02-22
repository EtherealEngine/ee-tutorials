import { ECS } from '@etherealengine/ecs'
import { NameComponent } from '@etherealengine/spatial/src/common/NameComponent'
import { VisibleComponent } from '@etherealengine/spatial/src/renderer/components/VisibleComponent'
import { TransformComponent } from '@etherealengine/spatial/src/transform/components/TransformComponent'
import { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'
import { Vector3 } from 'three'
import { GeometryTypeEnum } from '@etherealengine/engine/src/scene/constants/GeometryTypeEnum'
import { PhysicsSystem } from '@etherealengine/spatial'

// Define our component
export const BasicsComponent = ECS.defineComponent({
  name: 'ee.tutorial.BasicsComponent',
  jsonID: 'ee.tutorial.BasicsComponent',
  onInit: () => { return { initialized: false } }
})

// Define the query that will find our Scene's Entity
const basicsQuery = ECS.defineQuery([BasicsComponent])

// Define our system
export const BasicsSystem = ECS.defineSystem({
  uuid: 'ee.tutorial.BasicsSystem',
  execute: () => {
    for (const entity of basicsQuery()) {
      const { initialized } = ECS.getComponent(entity, BasicsComponent)
      if (initialized) continue

      ECS.getMutableComponent(entity, BasicsComponent).initialized.set(true)

      ECS.setComponent(entity, NameComponent, 'ee.tutorial.basics-entity')
      ECS.setComponent(entity, VisibleComponent)
      ECS.setComponent(entity, TransformComponent, { position: new Vector3(0, 1, 0) })
      ECS.setComponent(entity, PrimitiveGeometryComponent, { geometryType: GeometryTypeEnum.SphereGeometry })
    }
  },
  insert: { after: PhysicsSystem }
})

