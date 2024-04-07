import React, { FC } from 'react'
import ArticleImage from './ArticleImage';
import { Article } from '@/infrastructure/repository/ArticlesRepository';

interface ArticleProps {
  article: Article
}

const ArticleItem: FC<ArticleProps> = ({ article }) => {
  return (
    <article className='mod-caja-nota '>
      <ArticleImage altText={article.headlines.basic} imgSrc={article.promo_items?.basic.url} />
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="">{article.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{article.display_date}</h4>
      </div>
    </article >
  )
}

export default ArticleItem;