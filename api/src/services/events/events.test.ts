import type { Event } from '@prisma/client'

import { events, event, createEvent, updateEvent, deleteEvent } from './events'
import type { StandardScenario } from './events.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
  scenario('returns all events', async (scenario: StandardScenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario: StandardScenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async () => {
    const result = await createEvent({
      input: {
        name: 'String',
        date: '2023-12-06T23:57:21.433Z',
        updatedAt: '2023-12-06T23:57:21.433Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.date).toEqual(new Date('2023-12-06T23:57:21.433Z'))
    expect(result.updatedAt).toEqual(new Date('2023-12-06T23:57:21.433Z'))
  })

  scenario('updates a event', async (scenario: StandardScenario) => {
    const original = (await event({ id: scenario.event.one.id })) as Event
    const result = await updateEvent({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a event', async (scenario: StandardScenario) => {
    const original = (await deleteEvent({ id: scenario.event.one.id })) as Event
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
