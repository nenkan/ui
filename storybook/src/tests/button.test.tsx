import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as ButtonStories from '../stories/button.stories.jsx'

const { Plain, Interactive } = composeStories(ButtonStories)

test('Button Plain story renders', async () => {
  render(<Plain />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('Button')
})

test('Button Interactive story', async () => {
  const { container } = render(<Interactive />)
  
  if (Interactive.play) {
    await Interactive.play({ canvasElement: container })
  }
  
  expect(screen.getByRole('button')).toBeInTheDocument()
})