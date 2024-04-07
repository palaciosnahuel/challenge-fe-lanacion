import { parseDate } from "@/utils/DateParseUtils";
import { Article } from "@/infrastructure/repository/ArticlesRepository";
import { mockData } from "../mock";
import { filterArticlesBySubtype, parseDisplayDate, parseAndCountTags }  from "@/infrastructure/usecases/ArticlesUseCases";


describe('parseDisplayDate', () => {
  it('Parse date', () => {
    const parsedArticles = parseDisplayDate(mockData.articles);
    const expected1 = '6 de diciembre de 2019';
    expect(parsedArticles[0].display_date).toEqual(expected1);
  });
});

describe('parseAndCountTags', () => {
  test('Parse and count tags', () => {

    const articles = mockData.articles; 
    const tags = parseAndCountTags(articles); 
    const parsedTags = tags.sort((a, b) => b.count - a.count).slice(0, 10)

    expect(parsedTags).toHaveLength(10); 
    expect(parsedTags.some(tag => tag.slug === 'arroz-tid47136' && tag.count === 4)).toBe(true);
    expect(parsedTags.some(tag => tag.slug === 'huevo-tid47236' && tag.count === 4)).toBe(true);
  
  });
});

describe('filterArticlesBySubtype', () => {
  test('Filter by subtyle', () => {

      const filteredArticles = filterArticlesBySubtype(mockData.articles);
      expect(filteredArticles).toHaveLength(7);
      expect(filteredArticles.every(article => article.subtype === "7")).toBe(true);
      
  });
});