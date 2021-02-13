import Link from 'next/link';
import { List, ListItem } from '@material-ui/core';

import { getRootPath } from '@lib/getPath';

import { headerStyles as useStyles } from '@styles/project/header.styles';

const PageList: React.FC = () => {
  const styles = useStyles();
  return (
    <List className={styles.pageList}>
      <Link href={getRootPath('tags')}>
        <ListItem key="tags" button>
          タグ一覧
        </ListItem>
      </Link>
      <Link href={getRootPath('about_this_site')}>
        <ListItem key="about_this_site" button>
          このサイトについて
        </ListItem>
      </Link>
      <Link href={getRootPath('privacy')}>
        <ListItem key="privacy" button>
          プライバシーポリシー
        </ListItem>
      </Link>
      <Link href={getRootPath('contact')}>
        <ListItem key="contact" button>
          お問い合わせ
        </ListItem>
      </Link>
    </List>
  );
};

export default PageList;
