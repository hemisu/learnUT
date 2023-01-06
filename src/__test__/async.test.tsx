import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { DomAsync } from '../DomAsync'

describe('examples for async', () => {
  test('for jest', async () => {
    const fetchData = async () => {
      const res = await new Promise((resolve) => {
        resolve('this is a demo for fetching data')
      })
      return res
    }
    const data = await fetchData()
    expect(data).toBe('this is a demo for fetching data')
    await expect(fetchData()).resolves.toBe('this is a demo for fetching data')
  })

  test('for react testing async', async () => {
    render(<DomAsync />)
    const testDom = await screen.findByText('a demo for async test')
    expect(testDom).toBeInTheDocument()
  })

  test('for react testing library', async () => {
    render(<DomAsync />)
    waitForElementToBeRemoved(screen.queryByText('加载中...')).then(() => {
      console.log('元素加载完成')
    })

    await waitFor(
      () => {
        const waitTestDom = screen.getByText('a demo for async test')
        expect(waitTestDom).toBeInTheDocument()
      },
      {
        timeout: 1000,
        interval: 100,
      }
    )
  })
})

export {}
