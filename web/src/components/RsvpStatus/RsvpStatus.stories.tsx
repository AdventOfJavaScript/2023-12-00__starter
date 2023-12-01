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

import RsvpStatus from './RsvpStatus'

const meta: Meta<typeof RsvpStatus> = {
  component: RsvpStatus,
}

export default meta

type Story = StoryObj<typeof RsvpStatus>

export const Primary: Story = {
  args: {
    count: 0,
    status: 'success',
    heading: 'Attending',
  },
}

export const Disabled: Story = {
  args: {
    count: 0,
    disabled: true,
    status: 'success',
    heading: 'Attending',
  },
}

export const withClearFilter: Story = {
  args: {
    clearFilter: {
      isShowing: true,
      handleClick: () => {},
    },
    count: 0,
    status: 'success',
    heading: 'Attending',
  },
}
