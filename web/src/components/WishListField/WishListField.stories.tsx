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

import WishListField from './WishListField'

const meta: Meta<typeof WishListField> = {
  component: WishListField,
}

export default meta

type Story = StoryObj<typeof WishListField>

export const Primary: Story = {
  args: {
    number: 1,
    name: 'wishList',
    roundButton: {
      handleClick: () => {},
      status: 'success',
    },
  },
}
