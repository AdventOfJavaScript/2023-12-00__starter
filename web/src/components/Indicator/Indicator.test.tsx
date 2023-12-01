import { render } from '@redwoodjs/testing/web'

import Indicator from './Indicator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Indicator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Indicator />)
    }).not.toThrow()
  })
})
