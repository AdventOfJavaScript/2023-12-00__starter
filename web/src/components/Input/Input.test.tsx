import { render } from '@redwoodjs/testing/web'

import Input from './Input'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Input', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Input />)
    }).not.toThrow()
  })
})
