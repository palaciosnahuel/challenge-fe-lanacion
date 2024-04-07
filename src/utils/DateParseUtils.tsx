export const parseDate = (isoDate: string): string => {
    const dateObj = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('es-ES', options);
    return formattedDate;
}