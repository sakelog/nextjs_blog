declare module 'react-social-icons' {
  export type SocialIconProps = {
    url: string;
    fgColor?: string;
    bgColor?: string;
    network?: string;
    label?: string;
  };
  export const SocialIcon: React.FC<SocialIconProps>;
  export default { SocialIcon };
}
declare module 'remark-slug' {
  export const remark_slug: ProcessorSettings<RemarkOptions>;
  export default remark_slug;
}
