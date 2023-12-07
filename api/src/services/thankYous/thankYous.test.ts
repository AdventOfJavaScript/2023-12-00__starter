import type { ThankYou } from '@prisma/client'

import {
  thankYous,
  thankYou,
  createThankYou,
  updateThankYou,
  deleteThankYou,
} from './thankYous'
import type { StandardScenario } from './thankYous.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('thankYous', () => {
  scenario('returns all thankYous', async (scenario: StandardScenario) => {
    const result = await thankYous()

    expect(result.length).toEqual(Object.keys(scenario.thankYou).length)
  })

  scenario('returns a single thankYou', async (scenario: StandardScenario) => {
    const result = await thankYou({ id: scenario.thankYou.one.id })

    expect(result).toEqual(scenario.thankYou.one)
  })

  scenario('creates a thankYou', async (scenario: StandardScenario) => {
    const result = await createThankYou({
      input: {
        eventId: scenario.thankYou.two.eventId,
        userId: scenario.thankYou.two.userId,
        toUserId: scenario.thankYou.two.toUserId,
        message: 'String',
      },
    })

    expect(result.eventId).toEqual(scenario.thankYou.two.eventId)
    expect(result.userId).toEqual(scenario.thankYou.two.userId)
    expect(result.toUserId).toEqual(scenario.thankYou.two.toUserId)
    expect(result.message).toEqual('String')
  })

  scenario('updates a thankYou', async (scenario: StandardScenario) => {
    const original = (await thankYou({
      id: scenario.thankYou.one.id,
    })) as ThankYou
    const result = await updateThankYou({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a thankYou', async (scenario: StandardScenario) => {
    const original = (await deleteThankYou({
      id: scenario.thankYou.one.id,
    })) as ThankYou
    const result = await thankYou({ id: original.id })

    expect(result).toEqual(null)
  })
})
