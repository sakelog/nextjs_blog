export function toKebabCase(target: string): string {
  let KebabString: string;

  KebabString = target;

  KebabString = KebabString.replace(/_/g, '-');
  KebabString = KebabString.replace(/ *?[A-Z]/g, (allstr) => {
    return allstr.toLowerCase();
  });

  return KebabString;
}
