import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventsCell from 'src/components/EventsCell/EventsCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="EventInvite" description="EventInvite page" />
      <EventsCell id={id} />
      <InviteGroup />
    </>
  )
}

export default EventInvitePage
