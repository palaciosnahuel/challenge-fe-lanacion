import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonSecondary from '@/app/components/Buttons/ButtonSecondary';

describe('ButtonSecondary Component', () => {
  test('Render with text', () => {
    const buttonText = 'Sarasa';
    const { getByText } = render(<ButtonSecondary text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('Check class', () => {
    const buttonText = 'Text';
    const { getByText } = render(<ButtonSecondary text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toHaveClass('--btn', '--secondary');
  });
});
