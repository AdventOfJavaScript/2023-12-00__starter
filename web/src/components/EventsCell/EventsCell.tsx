import type { EventsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import Button from '../Button/Button'

export const QUERY = gql`
  query EventsQuery($id: String!) {
    event(id: $id) {
      name
      date
      sendReminder
      userStatus {
        user {
          firstName
          lastName
          email
        }
      }
    }
  }
`

export const UPDATE_EVENT_NAME = gql`
  mutation EventsCell_UpdateEvent($id: String!, $name: String!) {
    updateEvent(id: $id, input: { name: $name }) {
      id
      name
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
      <div className="flex ">
        <div>
          <p className="heading-name">{event.name}</p>
        </div>
        <div className="edit-button">
          <ModifyEvent id={event.id} />
        </div>
      </div>
      {/* <Button className="button" handleClick={event.sendReminder/> */}
    </ul>
  )
}

export const ModifyEvent = ({ id, name }) => {
  const [updateEventName, { data, loading, error }] =
    useMutation(UPDATE_EVENT_NAME)

  const handleCheckClick = () => {
    updateEventName({
      variables: { id, name },
    })
  }

  return (
    <>
      <Button
        handleClick={handleCheckClick}
        className="margin-auto bg-supernova align-middle text-black"
        size="small"
      >
        Edit
      </Button>
    </>
  )
}
