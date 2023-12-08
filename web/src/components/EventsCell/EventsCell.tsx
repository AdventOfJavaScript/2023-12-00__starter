import type { EventsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EventsQuery($id: String!) {
    event(id: $id) {
      name
      date
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<EventsQuery>) => {
  const getWeeksAndDaysLeft = () => {
    const eventDate = new Date(event.date)
    const today = new Date()
    const timeLeft = eventDate.getTime() - today.getTime()
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const weeksLeft = Math.floor(daysLeft / 7)
    const daysLeftAfterWeeks = daysLeft - weeksLeft * 7
    return { weeksLeft, daysLeftAfterWeeks }
  }
  const { weeksLeft, daysLeftAfterWeeks } = getWeeksAndDaysLeft()
  return (
    <ul>
      <p className="heading" key={event.name}>
        {weeksLeft} Weeks & {daysLeftAfterWeeks} Days until
      </p>
      <p className="heading-name">{event.name}</p>
    </ul>
  )
}
