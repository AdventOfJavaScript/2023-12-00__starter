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

import ThankYouForm from './ThankYouForm'

const meta: Meta<typeof ThankYouForm> = {
  component: ThankYouForm,
}

export default meta

type Story = StoryObj<typeof ThankYouForm>

export const Primary: Story = {
  args: {
    card: {
      avatar: {
        alt: 'Avatar',
        avatar: 'https://picsum.photos/seed/1701322447715/300/300',
      },
      email: 'amy@example.com',
      name: 'Amy Dutton',
    },
  },
}
