/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/

import { Link } from 'react-scroll';
import style from '@styles/TOC.module.scss';

type propsType = {
  toc: render.toc.iditem[];
  activeItemIds: render.toc.activeItemIds | null;
};

const MAX_DEPTH = 3;

const TOC: React.FC<propsType> = (props) => {
  const { toc, activeItemIds } = props;
  const TOCList = toc.map((item) => {
    return (
      item.depth <= MAX_DEPTH && (
        <Link
          to={item.id}
          smooth={true}
          duration={500}
          offset={-100}
          key={item.id}
        >
          <li
            style={{
              marginLeft: `${(item.depth - 2) * 1}rem`,
            }}
            className={
              activeItemIds &&
              activeItemIds.includes(item.id)
                ? style.active
                : style.notActive
            }
          >
            {item.value}
          </li>
        </Link>
      )
    );
  });
  return (
    <>
      <ul className={style.root}>{TOCList}</ul>
    </>
  );
};

export default TOC;
