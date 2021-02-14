import Link from 'next/link';
import { List, ListItem } from '@material-ui/core';

import { getRootPath } from '@lib/getPath';

import { headerStyles as useStyles } from '@styles/project/header.styles';

const PageList: React.FC = () => {
  const styles = useStyles();
  return (
    <List className={styles.pageList}>
      <ListItem key="tags" button>
        <Link href={getRootPath('tags')}>タグ一覧</Link>
      </ListItem>
      <ListItem key="about_this_site" button>
        <Link href={getRootPath('about_this_site')}>このサイトについて</Link>
      </ListItem>
      <ListItem key="privacy" button>
        <Link href={getRootPath('privacy')}>プライバシーポリシー</Link>
      </ListItem>
      <ListItem key="contact" button>
        <Link href={getRootPath('contact')}>お問い合わせ</Link>
      </ListItem>
    </List>
  );
};

export default PageList;
