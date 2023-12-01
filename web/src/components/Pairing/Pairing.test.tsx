import { render } from '@redwoodjs/testing/web'

import Pairing from './Pairing'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pairing', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pairing />)
    }).not.toThrow()
  })
})
