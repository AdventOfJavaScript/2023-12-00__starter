import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String4109305', updatedAt: '2023-12-06T23:57:06.376Z' },
    },
    two: {
      data: { email: 'String1061358', updatedAt: '2023-12-06T23:57:06.376Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
