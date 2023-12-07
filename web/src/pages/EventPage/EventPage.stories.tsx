import type { Meta, StoryObj } from '@storybook/react'

import EventPage from './EventPage'

const meta: Meta<typeof EventPage> = {
  component: EventPage,
}

export default meta

type Story = StoryObj<typeof EventPage>

export const Primary: Story = {}
