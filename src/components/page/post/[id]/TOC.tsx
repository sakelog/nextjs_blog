// components
import Link from 'next/link';

type PropTypes = {
  tocItems: Array<Content.TOCItem>;
};

const TOC = ({ tocItems }: PropTypes) => (
  <ul className="uk-list">
    {tocItems.map((item) => (
      <li
        key={`toc-item-${item.id}`}
        style={
          item.name === 'h3' ? { paddingLeft: '2rem' } : {}
        }
      >
        <Link href={`#${item.id}`}>{item.text}</Link>
      </li>
    ))}
  </ul>
);

export default TOC;
