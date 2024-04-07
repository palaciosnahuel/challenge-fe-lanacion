import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleItem from '@/app/views/recipes/compontents/Article/ArticleItem';
import { mockData } from '../../../../mock';

describe('ArticleItem Component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<ArticleItem article={mockData.articles[0]} />);
    expect(getByText("Arroz con Leche")).toBeInTheDocument();
  });
});
