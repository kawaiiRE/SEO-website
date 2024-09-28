import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About'

test('renders About section with correct content', () => {
  render(<About />)
  const heading = screen.getByRole('heading', { name: /About HamsterPOS/i })
  const paragraph = screen.getByText(
    /We offer POS solutions for local businesses to manage their sales efficiently/i
  )

  expect(heading).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
})
