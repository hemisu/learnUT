import React from 'react'
import { render, screen } from '@testing-library/react'
import Domquery from '../Domquery'

describe('tests for 《4｜DOM查询（上）》 & 《5｜Dom查询（下）》', () => {
  test('get & query & find', () => {
    render(<Domquery />)
    const getElement = screen.getByText('test1')
    const getAllElement = screen.getAllByText(/test/i)
    const queryElement = screen.queryByText('test3')
    const queryAllElement = screen.queryAllByText('test3')
    // debugger;
    // screen.debug(element)
  })

  test('default role', () => {
    render(<Domquery />)
    const button = screen.getByRole('button', { pressed: true })
    screen.debug(button)
  })

  test('labelText', () => {
    render(<Domquery />)
    const label = screen.getByLabelText('testLabel')
    screen.debug(label)
  })

  test('placeholder', () => {
    render(<Domquery />)
    const placeholderInput = screen.getByPlaceholderText('a query by placeholder')
    screen.debug(placeholderInput)
  })

  test('value', () => {
    render(<Domquery />)
    const valueInput = screen.getByDisplayValue('a query by value')
    screen.debug(valueInput)
  })

  test('alt', () => {
    render(<Domquery />)
    const altImg = screen.getByAltText('a query by alt')
    screen.debug(altImg)
  })

  test('title', () => {
    render(<Domquery />)
    const title = screen.getByTitle('a query by title')
    screen.debug(title)
  })

  test('testid', () => {
    render(<Domquery />)
    const testidItem = screen.getByTestId('a not so good query')
    screen.debug(testidItem)
  })

  test("test find aaaaa", () => {
    render(<Domquery />)
    const testLabel1 = screen.getByRole("button", { name:'testlabel1' })
    const testLabel2 = screen.getByRole("button", { name:'testlabel2' })
    screen.debug(testLabel1)
    screen.debug(testLabel2)
  })
})
