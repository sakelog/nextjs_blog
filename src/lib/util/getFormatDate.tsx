import { format, parseISO } from 'date-fns';

export const getFormatDate = (targetDate: string) => {
  const parsedDate = parseISO(targetDate);
  const formatDate = format(parsedDate, 'yyy-MM-dd');

  return formatDate;
};
