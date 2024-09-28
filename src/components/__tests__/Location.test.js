import React from 'react'
import { render, screen } from '@testing-library/react'
import Location from '../Location'

test('renders Location section with correct content', () => {
  render(<Location />)
  const heading = screen.getByRole('heading', { name: /Our Location/i })
  const address = screen.getByText(/123 Main Street, Beirut, Lebanon/i)
  const image = screen.getByAltText(/HamsterPOS Building Location/i)

  expect(heading).toBeInTheDocument()
  expect(address).toBeInTheDocument()
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('loading', 'lazy') // Check for lazy loading
})
