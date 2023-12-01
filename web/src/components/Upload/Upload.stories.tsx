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

import Upload from './Upload'

const meta: Meta<typeof Upload> = {
  component: Upload,
}

export default meta

type Story = StoryObj<typeof Upload>

export const Primary: Story = {
  args: {
    name: 'upload',
  },
}
