import { render } from '@redwoodjs/testing/web'

import RoundButton from './RoundButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RoundButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoundButton />)
    }).not.toThrow()
  })
})
