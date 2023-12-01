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

import HeaderWithRulers from './HeaderWithRulers'

const meta: Meta<typeof HeaderWithRulers> = {
  component: HeaderWithRulers,
}

export default meta

type Story = StoryObj<typeof HeaderWithRulers>

export const Primary: Story = {
  args: {
    heading: 'Heading',
  },
}
