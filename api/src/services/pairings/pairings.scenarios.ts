import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-06T23:57:27.815Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:27.815Z',
            updatedAt: '2023-12-06T23:57:27.815Z',
          },
        },
        santa: {
          create: {
            email: 'String1942633',
            updatedAt: '2023-12-06T23:57:27.815Z',
          },
        },
        person: {
          create: {
            email: 'String7983740',
            updatedAt: '2023-12-06T23:57:27.815Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-06T23:57:27.815Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:27.816Z',
            updatedAt: '2023-12-06T23:57:27.816Z',
          },
        },
        santa: {
          create: {
            email: 'String8559101',
            updatedAt: '2023-12-06T23:57:27.816Z',
          },
        },
        person: {
          create: {
            email: 'String738024',
            updatedAt: '2023-12-06T23:57:27.816Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
