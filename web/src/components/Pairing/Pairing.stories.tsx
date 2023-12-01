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

import Pairing from './Pairing'

const meta: Meta<typeof Pairing> = {
  component: Pairing,
}

export default meta

type Story = StoryObj<typeof Pairing>

export const Primary: Story = {
  args: {
    secretSanta: {
      avatar: {
        alt: 'Avatar',
        avatar: 'https://picsum.photos/seed/1701322447715/300/300',
      },
      email: 'amy@redwoodjs.com',
      name: 'Amy Dutton',
    },
  },
}
