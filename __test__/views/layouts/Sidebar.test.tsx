import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '@/app/views/layout/Sidebar';
import '@testing-library/jest-dom/extend-expect';

describe('Sidebar Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('Recetas más leídas')).toBeInTheDocument();
  });
});
