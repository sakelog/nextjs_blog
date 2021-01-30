/*==========================================================
参考：https://github.com/Takumon/react-markdown-sync-toc
============================================================*/

import { Link } from 'react-scroll';
import styles from '../../styles/Object/Component/_c-post__TOC.module.scss';

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
        <li
          key={item.id}
          style={{ marginLeft: `${(item.depth - 2) * 24}px` }}
          className={
            activeItemIds && activeItemIds.includes(item.id)
              ? styles.active
              : ''
          }
        >
          <Link to={item.id} smooth={true} duration={500}>
            {item.value}
          </Link>
        </li>
      )
    );
  });
  return (
    <>
      <h2 className={styles.title}>目次</h2>
      <ul className={styles.toc}>{TOCList}</ul>
    </>
  );
};

export default TOC;
