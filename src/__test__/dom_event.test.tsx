import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomEvent } from '../DomEvent'

describe('test for 组件绑定事件', () => {
  it('mock events with fireEvent', () => {
    const clickEvent = jest.fn()
    render(<DomEvent onClick={clickEvent} />)
    fireEvent.click(screen.getByRole('note'))

    expect(clickEvent).toBeCalled()
    expect(clickEvent).toBeCalledTimes(1)
  })
  it('mock events with userEvent', async () => {
    const clickEvent = jest.fn()
    render(<DomEvent onClick={clickEvent} />)
    await userEvent.click(screen.getByRole('note'))
    expect(clickEvent).toBeCalled()
    expect(clickEvent).toBeCalledTimes(1)
  })
})

export {}
