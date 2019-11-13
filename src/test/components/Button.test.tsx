import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button', () => {
  it('is a button', () => {
    const { container } = render(<Button />);
    const { firstChild } = container;
    console.log(firstChild);
  });
});
