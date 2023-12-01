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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    avatar: 'https://picsum.photos/seed/1701216491240/300/300',
  },
}

export const letter: Story = {
  args: {
    letter: 'A',
  },
}

export const icon: Story = {
  args: {
    icon: 'eyeClosed',
  },
}

export const WithIndicator: Story = {
  args: {
    avatar: 'https://picsum.photos/seed/1701216491240/300/300',
    indicator: 'success',
  },
}

export const WithSantaHat: Story = {
  args: {
    avatar: 'https://picsum.photos/seed/1701216491240/300/300',
    showSantaHat: true,
  },
}
