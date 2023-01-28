import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../components/layaut/Navbar'

describe('Home', () => {
  it('renders a heading', () => {
    const {getByDisplayValue} = render(<Navbar event={function (): void {
      throw new Error('Function not implemented.')
    } } />)

    expect(getByDisplayValue('Sistemas')).toBeInTheDocument()
  })
})