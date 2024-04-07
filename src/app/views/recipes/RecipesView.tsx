import React from 'react'
import RecipesHeader from './compontents/RecipesHeader';
import RecipesMenu from './compontents/RecipesMenu';
import ArticleList from './compontents/Article/ArticleList';
import { getArticlesParsed } from '@/infrastructure/usecases/ArticlesUseCases';


const RecipesView = async () => {

  const articlesData = await getArticlesParsed()

  return (
    <>
      <RecipesHeader />
      <RecipesMenu tags={articlesData.tags}/>
      <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
        <ArticleList articles={articlesData.articles}/>
      </section>
    </>
  )
}

export default RecipesView;