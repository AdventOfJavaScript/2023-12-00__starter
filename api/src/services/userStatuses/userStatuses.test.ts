import type { UserStatus } from '@prisma/client'

import {
  userStatuses,
  userStatus,
  createUserStatus,
  updateUserStatus,
  deleteUserStatus,
} from './userStatuses'
import type { StandardScenario } from './userStatuses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userStatuses', () => {
  scenario('returns all userStatuses', async (scenario: StandardScenario) => {
    const result = await userStatuses()

    expect(result.length).toEqual(Object.keys(scenario.userStatus).length)
  })

  scenario(
    'returns a single userStatus',
    async (scenario: StandardScenario) => {
      const result = await userStatus({ id: scenario.userStatus.one.id })

      expect(result).toEqual(scenario.userStatus.one)
    }
  )

  scenario('creates a userStatus', async (scenario: StandardScenario) => {
    const result = await createUserStatus({
      input: {
        userId: scenario.userStatus.two.userId,
        eventId: scenario.userStatus.two.eventId,
        status: 'INVITED',
      },
    })

    expect(result.userId).toEqual(scenario.userStatus.two.userId)
    expect(result.eventId).toEqual(scenario.userStatus.two.eventId)
    expect(result.status).toEqual('INVITED')
  })

  scenario('updates a userStatus', async (scenario: StandardScenario) => {
    const original = (await userStatus({
      id: scenario.userStatus.one.id,
    })) as UserStatus
    const result = await updateUserStatus({
      id: original.id,
      input: { status: 'ACCEPTED' },
    })

    expect(result.status).toEqual('ACCEPTED')
  })

  scenario('deletes a userStatus', async (scenario: StandardScenario) => {
    const original = (await deleteUserStatus({
      id: scenario.userStatus.one.id,
    })) as UserStatus
    const result = await userStatus({ id: original.id })

    expect(result).toEqual(null)
  })
})
