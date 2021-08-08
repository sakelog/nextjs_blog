import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import {
  Grid,
  Container,
  InputLabel,
  Input,
  TextareaAutosize,
  Button,
} from '@material-ui/core';

import { getRootPath } from '@lib/getPath';

import { contactFormStyles as useStyles } from '@styles/component/contactForm.style';

const ContactForm: React.FC = () => {
  const styles = useStyles();
  const endPoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const privacyTag = (
    <Container className={styles.privacy}>
      <p>
        送信いただいた内容はプライバシーポリシーに沿って対応します。
        <br />
        <Link href={getRootPath('privacy')}>プライバシーポリシー</Link>
        に同意の上、送信をお願いします。
      </p>
    </Container>
  );
  return (
    <form action={endPoint} method="POST" className={styles.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="name" className={styles.label} required={true}>
            <PersonIcon className={styles.icon} />
            お名前
          </InputLabel>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Input
            type="text"
            name="name"
            placeholder="サンプル 花子"
            className={styles.input}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="email" className={styles.label} required={true}>
            <MailIcon className={styles.icon} />
            メールアドレス
          </InputLabel>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Input
            type="email"
            name="email"
            placeholder="sample@email.com"
            className={styles.input}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5}>
          <InputLabel htmlFor="email" className={styles.label} required={true}>
            <MessageIcon className={styles.icon} />
            本文
          </InputLabel>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextareaAutosize
            name="message"
            className={styles.textarea}
            rows={5}
          />
        </Grid>
      </Grid>
      {privacyTag}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={styles.button}
        type="submit"
      >
        送信
      </Button>
    </form>
  );
};

export default ContactForm;
