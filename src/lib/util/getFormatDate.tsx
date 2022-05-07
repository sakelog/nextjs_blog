import { format, parseISO } from 'date-fns';

export const getFormatDate = (targetDate: string) => {
  const parsedDate = parseISO(targetDate);
  const formatDate = format(parsedDate, 'yyy-MM-dd');

  return formatDate;
};

export const getYMDObject = (targetDate: string) => {
  const parsedDate = parseISO(targetDate);
  const yyyy = format(parsedDate, 'yyy');
  const mm = format(parsedDate, 'MM');
  const dd = format(parsedDate, 'dd');

  return { yyyy, mm, dd };
};

export default { getFormatDate };
