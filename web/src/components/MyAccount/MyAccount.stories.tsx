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

import MyAccount from './MyAccount'

const meta: Meta<typeof MyAccount> = {
  component: MyAccount,
}

export default meta

type Story = StoryObj<typeof MyAccount>

export const Primary: Story = {}
