import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleImage from '@/app/views/recipes/compontents/Article/ArticleImage';

describe('ArticleImage component', () => {
  test('render image with src', () => {
    
    const imgSrc = 'https://sarasa.com/image.jpg';
    const { getByAltText } = render(<ArticleImage altText="sarasa" imgSrc={imgSrc} />);
    const imgElement = getByAltText('sarasa');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', imgSrc);
    
  });

});
