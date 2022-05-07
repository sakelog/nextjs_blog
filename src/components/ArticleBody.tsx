import { htmlToReact } from '@lib/markdown/htmlToReact';

type PropsType = {
  body: string;
};

const ArticleBody = (props: PropsType) => {
  const result: JSX.Element =
    htmlToReact.processSync(props.body)?.result || null;
  return (
    <section className="p-articleBody__root">
      {result}
    </section>
  );
};

export default ArticleBody;
