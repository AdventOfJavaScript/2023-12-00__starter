import type { Meta, StoryObj } from '@storybook/react'

import SignupPage from './SignupPage'

const meta: Meta<typeof SignupPage> = {
  component: SignupPage,
}

export default meta

type Story = StoryObj<typeof SignupPage>

export const Primary: Story = {}
