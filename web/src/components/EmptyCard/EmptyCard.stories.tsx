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

import EmptyCard from './EmptyCard'

const meta: Meta<typeof EmptyCard> = {
  component: EmptyCard,
}

export default meta

type Story = StoryObj<typeof EmptyCard>

export const Primary: Story = {}
