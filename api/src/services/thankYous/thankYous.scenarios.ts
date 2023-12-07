import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:51.302Z',
            updatedAt: '2023-12-06T23:57:51.302Z',
          },
        },
        user: {
          create: {
            email: 'String2427439',
            updatedAt: '2023-12-06T23:57:51.302Z',
          },
        },
        toUser: {
          create: {
            email: 'String1838041',
            updatedAt: '2023-12-06T23:57:51.303Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:51.303Z',
            updatedAt: '2023-12-06T23:57:51.303Z',
          },
        },
        user: {
          create: {
            email: 'String27993',
            updatedAt: '2023-12-06T23:57:51.303Z',
          },
        },
        toUser: {
          create: {
            email: 'String3856181',
            updatedAt: '2023-12-06T23:57:51.303Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
