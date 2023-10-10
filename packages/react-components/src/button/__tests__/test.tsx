import { render, screen } from '@testing-library/react';
import Button from '../index';
import { describe, test, expect } from 'vitest';

test('Match Snapshot', () => {
  render(<Button />);
  const linkElement = screen.getByAltText(/react/i);
});
