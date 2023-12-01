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

import Card from '../Card/Card'

import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    status: 'error',
  },
}
