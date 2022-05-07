import Link from 'next/link';

type PropsType = {
  slug?: string;
  title?: string;
};

const BackToTop = ({ slug, title }: PropsType) => {
  return (
    <div className="c-button c-button--gray">
      <Link href={'/' + (slug || '')}>
        {title || 'Topへ戻る'}
      </Link>
    </div>
  );
};

export default BackToTop;
