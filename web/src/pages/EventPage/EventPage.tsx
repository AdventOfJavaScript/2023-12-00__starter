import { supabase } from 'api/db/supabase'

import { DateField, Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'

const EventPage = () => {
  const onSubmit = (inputs) => {
    console.log('inputs')
  }
  // const onLogin = () => {
  //   navigate(routes.dashboard())
  // }
  // async function signIn(state) {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: state.Email,
  //     password: state.Password,
  //   })
  //   // console.log(data.user.role)
  // }
  return (
    <>
      <MetaTags title="Event" description="Event Page" />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="Set up your Group" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Input name="Group Name" />
          <DateField name="Event Date" className="date-field" />
          <Checkbox name="Event Type" />
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
