import react from 'react'
import { render, screen } from '@testing-library/react'
import DomExpect from '../DomExpect'
import { act } from 'react-dom/test-utils'

describe('tests for DOM断言', () => {
  it('visible validation', () => {
    render(<DomExpect />)
    const emptyNode = screen.getByRole('generic', { name: 'empty_node' })
    const [hiddenNode] = screen.getAllByRole('note', { hidden: true })
    const normalNode = screen.getByRole('note')

    expect(emptyNode).toBeEmptyDOMElement()
    expect(hiddenNode).not.toBeVisible()
    expect(emptyNode).toBeInTheDocument()
    expect(hiddenNode).toBeInTheDocument()
    expect(normalNode).toBeInTheDocument()
    expect(normalNode).toHaveTextContent(/1/i)
  })

  // it('form validation without', () => {
  //   render(<DomExpect />)
  //   const form = screen.getByRole('form', { name: 'form' })
  //   const username = screen.getByRole('textbox', { name: 'username' })
  //   const age = screen.getByRole('spinbutton', { name: /duration/i })
  //   const manCheckbox = screen.getByRole('radio', { checked: true })
  //   screen.debug(manCheckbox)
  //   const womanCheckbox = screen.getByRole('radio', { checked: false, name: /defaultwoman/i })
  //   expect(username).toBeDisabled()
  //   expect(age).toBeEnabled()
  //   expect(age).toBeRequired()
  //   age.focus()
  //   expect(age).toHaveFocus()
  //   expect(manCheckbox).toBeChecked()
  //   expect(womanCheckbox).not.toBeChecked()
  //   expect(form).toHaveFormValues({
  //     username: 'zhenmin',
  //     age: 23,
  //     sex: 'man',
  //   })
  //   expect(age).toHaveValue(23)
  // })

  it('code validation', () => {
    render(<DomExpect />)
    const [hiddennode] = screen.getAllByRole('note2', { hidden: true })
    screen.debug(hiddennode)

    expect(hiddennode).toHaveAttribute('aria-hidden')
    expect(hiddennode).toHaveClass('test')
    expect(hiddennode).toHaveStyle('display:none')
  })

  test('visible validation with semi', () => {
    render(<DomExpect />)
    const form = screen.getByRole('form', { name: 'semi-form' })
    const username = screen.getByLabelText('username')
    const age = screen.getByLabelText('age')
    const sex = screen.getByLabelText('sex')
    const hobby = screen.getByLabelText('hobby')
    expect(username).toBeDisabled()
    expect(age).toBeEnabled()
    expect(age).toBeRequired()
    act(() => {
      age.focus()
    })
    expect(age).toHaveFocus()
    // expect(username).toHaveValue('zhenmin');
    // expect(hobby).toHaveValue('code');
    // expect(form).toHaveFormValues({
    //   username: 'zhenmin',
    //   age: 23,
    //   sex: 'man',
    //   hobby: 'code',
    // });
  })
})
