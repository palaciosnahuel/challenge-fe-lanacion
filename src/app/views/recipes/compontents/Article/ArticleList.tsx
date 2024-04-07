'use client'
import React, { FC } from 'react'
import ArticleItem from './ArticleItem';
import { useArticleContext } from '@/app/providers/ArticleContext';

const ArticleList = ({ }) => {
    const {data , loading} = useArticleContext()
    return (
        <>
            {!loading && data.articles.map((article: any) => (
                <ArticleItem article={article} key={article._id} />
            ))}
        </>
    )
}

export default ArticleList;