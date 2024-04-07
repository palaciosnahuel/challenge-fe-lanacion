"use client"
import { useArticleContext } from '@/app/providers/ArticleContext';
import { TagParse } from '@/infrastructure/usecases/ArticlesUseCases';
import React, { FC } from 'react'

interface RecipesMenuProps {
    tags?: TagParse[]
}

const RecipesMenu: FC<RecipesMenuProps> = ({ tags }) => {
    const { data, filterData } = useArticleContext()
    return (
        <div className="row">
            {data.tags.map((tag) =>
                <div key={tag.slug} className="cont_tags com-secondary-tag hlp-marginBottom-20">
                    <a onClick={(event)=>filterData(tag.slug,event)} href={`/tema/${tag.slug}`} >{tag.text}</a>
                </div>
            )}
        </div>
    )
}

export default RecipesMenu;