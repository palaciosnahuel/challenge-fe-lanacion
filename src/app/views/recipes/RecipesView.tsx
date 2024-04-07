import React from 'react'
import RecipesHeader from './compontents/RecipesHeader';
import RecipesMenu from './compontents/RecipesMenu';
import ArticleList from './compontents/Article/ArticleList';


const RecipesView = () => {

  return (
    <section className='sidebar__main'>
      <RecipesHeader />
      <RecipesMenu />
      <section className='row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade'>
        <ArticleList />
      </section>
    </section>
  )
}

export default RecipesView;