import type { Meta, StoryObj } from '@storybook/react'

import LogoutPage from './LogoutPage'

const meta: Meta<typeof LogoutPage> = {
  component: LogoutPage,
}

export default meta

type Story = StoryObj<typeof LogoutPage>

export const Primary: Story = {}
