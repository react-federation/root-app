import setup from 'utils/test/setup'

import Index from '.'

describe('Index', () => {
  it('should match snapshot', async () => {
    const { asFragment } = setup(Index)

    expect(asFragment()).toMatchSnapshot()
  })
})
