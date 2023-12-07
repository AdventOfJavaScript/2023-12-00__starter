import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-06T23:57:36.375Z',
        user: {
          create: {
            email: 'String3635473',
            updatedAt: '2023-12-06T23:57:36.375Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:36.375Z',
            updatedAt: '2023-12-06T23:57:36.375Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-06T23:57:36.375Z',
        user: {
          create: {
            email: 'String5656237',
            updatedAt: '2023-12-06T23:57:36.375Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-06T23:57:36.375Z',
            updatedAt: '2023-12-06T23:57:36.375Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
