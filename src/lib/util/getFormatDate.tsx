import { format, parseISO } from 'date-fns';

const getFormatDate = (targetDate: string) => {
  const parsedDate = parseISO(targetDate);
  const formatDate = format(parsedDate, 'yyy-MM-dd');

  return formatDate;
};

const getYMDObject = (targetDate: string) => {
  const parsedDate = parseISO(targetDate);
  const yyyy = format(parsedDate, 'yyy');
  const mm = format(parsedDate, 'MM');
  const dd = format(parsedDate, 'dd');

  return { yyyy, mm, dd };
};

export { getFormatDate, getYMDObject };

export default getFormatDate;
