import { ECS } from '@etherealengine/ecs'
import { NameComponent } from '@etherealengine/spatial/src/common/NameComponent'
import { VisibleComponent } from '@etherealengine/spatial/src/renderer/components/VisibleComponent'
import { TransformComponent } from '@etherealengine/spatial/src/transform/components/TransformComponent'
import { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'
import { Vector3 } from 'three'
import { GeometryTypeEnum } from '@etherealengine/engine/src/scene/constants/GeometryTypeEnum'
import { PhysicsSystem } from '@etherealengine/spatial'

export const BasicsComponent = ECS.defineComponent({
  name: 'ee.tutorial.BasicsComponent',
  jsonID: 'EE_tutorial_basics',
  onInit: () => { return { initialized: false } }
})

const basicsQuery = ECS.defineQuery([BasicsComponent])

export const BasicsSystem = ECS.defineSystem({
  uuid: 'ee.tutorial.BasicsSystem',
  execute: () => {
    for (const entity of basicsQuery()) {
      let { initialized } = ECS.getMutableComponent(entity, BasicsComponent)
      if (initialized.value) continue
      initialized.set(true)

      ECS.setComponent(entity, NameComponent, 'ee.tutorial.basics-entity')
      ECS.setComponent(entity, VisibleComponent)
      ECS.setComponent(entity, TransformComponent, { position: new Vector3(0, 1, 0) })
      ECS.setComponent(entity, PrimitiveGeometryComponent, { geometryType: GeometryTypeEnum.SphereGeometry })
    }
  },
  insert: { after: PhysicsSystem }
})

