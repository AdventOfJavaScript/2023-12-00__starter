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

import Hamburger from './Hamburger'

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
}

export default meta

type Story = StoryObj<typeof Hamburger>

export const Primary: Story = {}
