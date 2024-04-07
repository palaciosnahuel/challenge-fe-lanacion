import React, { FC } from 'react'
import ArticleItem from './ArticleItem';
import { getArticlesParsed } from '@/infrastructure/usecases/ArticlesUseCases';
import { Article } from '@/infrastructure/repository/ArticlesRepository';


interface ArticleListProps{
    articles : Article[]
}

const ArticleList: FC<ArticleListProps> = async ( {articles}) => {
    
    return (
        <>
            {articles.map((article: any) => (
                <ArticleItem article={article} key={article._id} />
            ))}
        </>
    )
}

export default ArticleList;

