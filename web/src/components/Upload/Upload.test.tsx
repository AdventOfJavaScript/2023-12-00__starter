import { render } from '@redwoodjs/testing/web'

import Upload from './Upload'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Upload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Upload />)
    }).not.toThrow()
  })
})
