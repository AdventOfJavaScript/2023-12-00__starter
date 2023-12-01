import { render } from '@redwoodjs/testing/web'

import Checkbox from './Checkbox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Checkbox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Checkbox />)
    }).not.toThrow()
  })
})
