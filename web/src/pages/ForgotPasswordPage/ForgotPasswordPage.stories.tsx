import type { Meta, StoryObj } from '@storybook/react'

import ForgotPasswordPage from './ForgotPasswordPage'

const meta: Meta<typeof ForgotPasswordPage> = {
  component: ForgotPasswordPage,
}

export default meta

type Story = StoryObj<typeof ForgotPasswordPage>

export const Primary: Story = {}
