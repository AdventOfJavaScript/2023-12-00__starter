import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  // const GET_EVENT_MUTATION = gql`
  //   mutation getEventMutation($id: String!) {
  //     getEvent(id: $id) {
  //       id
  //       name
  //       date
  //       createdAt
  //     }
  //   }
  // `
  // const [getEvent, { loading }] = useMutation(GET_EVENT_MUTATION, {
  //   onCompleted: (data) => {
  //     toast.success('Event was successfully fetched.')
  //     console.log(data)
  //   },
  //   onError: (error) => {
  //     console.error({ error })
  //     toast.error(error.message)
  //   },
  // })
  console.log(id)
  // const onSubmit = () => {
  //   getEvent({
  //     variables: {
  //       id: id,
  //     },
  //   })
  // }
  return (
    <>
      <MetaTags title="EventInvite" description="EventInvite page" />
      <InviteGroup />
    </>
  )
}

export default EventInvitePage
