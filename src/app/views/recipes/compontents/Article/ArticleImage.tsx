import React, { FC } from 'react'

interface ArticleImageProps {
 imgSrc: string | undefined;
 altText: string;
}

const ArticleImage: FC<ArticleImageProps> = ({imgSrc, altText}) => {
    return (
        <section id="" className="cont-figure">
            <a href="" className="figure">
                <picture id="" className="content-pic picture">
                    <img src={imgSrc} alt={altText} className="content-img" />
                </picture>
            </a>
        </section>
    )
}

export default ArticleImage;