import { parseDate } from "@/utils/DateParseUtils";
import { Article, getAllArticles } from "../repository/ArticlesRepository";

export interface TagParse {
    slug: string;
    text: string;
    count: number;
}

export const filterArticlesBySubtype = (articles: Article[]): Article[] => {
    return articles.filter(article => article.subtype === "7");
}

export const parseDisplayDate = (articles: Article[]): Article[] => {
    return articles.map(article => ({
        ...article,
        display_date: parseDate(article.display_date)
    }));
}

export const parseAndCountTags = (articles: Article[]): TagParse[] => {
    return Object.values(articles.reduce<{ [key: string]: TagParse }>((accumulator, article) => {
        article.taxonomy.tags.forEach(tag => {
            const { slug } = tag;
            accumulator[slug] = accumulator[slug] || { ...tag, count: 0 };
            accumulator[slug].count++;
        });
        return accumulator;
    }, {}));
}


export async function getArticlesParsed(): Promise<{ articles: Article[], tags: any }> {

    const { articles } = await getAllArticles();

    const filteredArticles = filterArticlesBySubtype(articles);
    const parsedArticles = parseDisplayDate(filteredArticles);
    
    const tags = parseAndCountTags(parsedArticles);
    const parsedTags = tags.sort((a, b) => b.count - a.count).slice(0, 10)

    return { articles: parsedArticles, tags: parsedTags };

}