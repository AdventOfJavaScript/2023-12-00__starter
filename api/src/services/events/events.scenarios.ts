import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-06T23:57:21.447Z',
        updatedAt: '2023-12-06T23:57:21.447Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-06T23:57:21.447Z',
        updatedAt: '2023-12-06T23:57:21.447Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
