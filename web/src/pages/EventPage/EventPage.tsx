import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const EventPage = () => {
  const CREATE_EVENT_MUTATION = gql`
    mutation createEventMutation(
      $name: String!
      $date: DateTime!
      $sendReminder: Boolean!
    ) {
      createEvent(
        input: { name: $name, sendReminder: $sendReminder, date: $date }
      ) {
        id
        name
        date
        createdAt
      }
    }
  `
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      toast.success('Event was successfully created.')
      console.log(data)
      navigate(routes.invite({ id: data.createEvent.id }))
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })
  const onSubmit = (inputs) => {
    createEvent({
      variables: {
        name: inputs.eventName,
        date: inputs.eventDate,
        sendReminder: inputs.eventReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Event" description="Event Page" />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="Set up your Group" className="text-white" />
        <Form onSubmit={onSubmit}>
          <div className="field">
            <Label name="eventDate">Group Name</Label>
            <TextField name="eventName" />
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField
              name="eventDate"
              placeholder=""
              className="date-field"
            ></DateField>
          </div>
          <Checkbox name="eventReminder" />
          <Submit
            className="
    w-full
  rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default EventPage
