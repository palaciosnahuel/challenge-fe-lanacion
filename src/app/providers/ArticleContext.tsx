import { Article } from '@/infrastructure/repository/ArticlesRepository';
import { TagParse, getArticlesParsed } from '@/infrastructure/usecases/ArticlesUseCases';
import React, { createContext, useContext, useEffect, useState } from 'react';


interface ArticleContextType {
    data: { articles: Article[], tags: TagParse[] },
    filterData: Function,
    loading: boolean
}

interface ArticleProviderProps {
    children: React.ReactNode
}


export const ArticleProvider: React.FC<ArticleProviderProps> =  ({ children }) => {
    const [initialData, setInitialData] = useState<{ articles: Article[], tags: TagParse[] }>({articles: [], tags: []});
    const [data, setData] = useState<{ articles: Article[], tags: TagParse[] }>({articles: [], tags: []});
    const [loading, setLoading] = useState<boolean>(true);

 
    const filterData = (tagSlug: string,event :Event): void => {
        event.preventDefault();
        const parsed = initialData.articles.filter(article =>
            article.taxonomy.tags.some(tag => tag.slug === tagSlug)
        );
        const tags = data.tags;
        setData({articles:parsed,tags})
    };

    useEffect(() => {
        getArticlesParsed()
          .then(articlesData => {
            setData(articlesData);
            setInitialData(articlesData)
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching articles:', error);
          });
      }, []);


    const apiContextValue: ArticleContextType = { data, filterData, loading };

    return (
        <ArticleContext.Provider value={apiContextValue}>
            {children}
        </ArticleContext.Provider>
    );
};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);


export const useArticleContext = (): ArticleContextType => {
    const context = useContext(ArticleContext);
    if (!context) {
      throw new Error('No provider.');
    }
    return context;
  };