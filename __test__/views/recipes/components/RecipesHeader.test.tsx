import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import RecipesHeader from '@/app/views/recipes/compontents/RecipesHeader';

describe('RecipesHeader component', () => {
  test('renders header with correct text', () => {
    const { getByText } = render(<RecipesHeader />);
    const headerElement = getByText('Acumulado Grilla');
    expect(headerElement).toBeInTheDocument();
  });
});
