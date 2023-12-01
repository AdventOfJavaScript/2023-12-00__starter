// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import ShowHidePassword from './ShowHidePassword'

const meta: Meta<typeof ShowHidePassword> = {
  component: ShowHidePassword,
}

export default meta

type Story = StoryObj<typeof ShowHidePassword>

export const Primary: Story = {
  render: () => (
    <Form>
      <ShowHidePassword name="password" />
    </Form>
  ),
}
