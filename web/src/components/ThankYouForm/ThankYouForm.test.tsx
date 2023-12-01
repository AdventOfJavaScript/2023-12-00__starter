import { render } from '@redwoodjs/testing/web'

import ThankYouForm from './ThankYouForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThankYouForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThankYouForm />)
    }).not.toThrow()
  })
})
