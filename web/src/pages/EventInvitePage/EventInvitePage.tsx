import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventsCell from 'src/components/EventsCell/EventsCell'
import { ModifyEvent } from 'src/components/EventsCell/EventsCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="EventInvite" description="Event Invite page" />
      <EventsCell id={id} />
      <InviteGroup id={id} />
    </>
  )
}

export default EventInvitePage
