import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String7218485',
            updatedAt: '2023-12-06T23:57:15.009Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:15.009Z',
            updatedAt: '2023-12-06T23:57:15.009Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String7703881',
            updatedAt: '2023-12-06T23:57:15.009Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:15.009Z',
            updatedAt: '2023-12-06T23:57:15.009Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
