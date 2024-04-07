"use client"
import { TagParse } from '@/infrastructure/usecases/ArticlesUseCases'
import React, { FC } from 'react'

interface RecipesMenuProps {
    tags: TagParse[]
}

const RecipesMenu : FC<RecipesMenuProps> = ({tags}) => {
    return (
        <div className="row">
            {tags.map((tag) =>
                <div key={tag.slug} className="cont_tags com-secondary-tag hlp-marginBottom-20">
                    <a href={`/tema/${tag.slug}`} >{tag.text}</a>
                </div>
            )}
        </div>
    )
}

export default RecipesMenu;