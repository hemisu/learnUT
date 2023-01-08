import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { RenderHook } from '../components/RenderHook'
import userEvent from '@testing-library/user-event'
import useCount from '../components/RenderHook/useCount'
import { act } from 'react-dom/test-utils'

describe('examples for render hook', () => {
  it('a test for component with useCount', () => {
    render(<RenderHook />)
    const note = screen.getByRole('note')
    expect(note).toHaveTextContent('0')
    userEvent.click(screen.getByRole('button'))
    waitFor(() => {
      expect(note).toHaveTextContent('1')
    })
  })

  it('a test for useCount', () => {
    const { result } = renderHook(() => useCount())
    act(() => {
      result.current.increase()
    })
    expect(result.current.num).toBe(1)
  })
})

export {}
