import { parseDate } from "@/utils/DateParseUtils";

describe('parseDate function', () => {
  test('should return a formattedd date', () => {
    const isoDate = '2024-04-06T12:00:00Z';
    const expected = '6 de abril de 2024'; 
    const formattedDate = parseDate(isoDate);
    expect(formattedDate).toBe(expected);
  });

});