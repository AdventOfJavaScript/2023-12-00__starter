import { render } from '@redwoodjs/testing/web'

import WishListField from './WishListField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishListField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishListField />)
    }).not.toThrow()
  })
})
