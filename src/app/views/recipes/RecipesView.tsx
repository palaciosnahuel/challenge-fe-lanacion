import React from 'react'
import RecipesHeader from './compontents/RecipesHeader';
import RecipesMenu from './compontents/RecipesMenu';
import ArticleList from './compontents/Article/ArticleList';


const RecipesView = () => {

  return (
    <>
      <RecipesHeader />
      <RecipesMenu />
      <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
        <ArticleList />
      </section>
    </>
  )
}

export default RecipesView;