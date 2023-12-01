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

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Large: Story = {
  args: {
    children: 'Button',
    className: 'bg-supernova text-black',
    handleClick: () => {},
    size: 'large',
  },
}

export const Medium: Story = {
  args: {
    children: 'Button',
    className: 'bg-black text-white',
    handleClick: () => {},
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    className: 'bg-black text-white',
    handleClick: () => {},
    size: 'small',
  },
}
