import Link from 'next/link';

type PropsType = {
  slug?: string;
  title?: string;
};

const BackToTop = (props: PropsType) => {
  return (
    <div className="my-4 space-x-1 text-sm text-gray-600">
      <span>{'['}</span>
      <Link href={'/' + (props.slug || '')}>
        {props.title || 'Topへ戻る'}
      </Link>
      <span>{']'}</span>
    </div>
  );
};

export default BackToTop;
