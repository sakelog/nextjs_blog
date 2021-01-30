import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import styles from '@styles/component/_c-article__SyntaxHighlight.module.scss';

const RemarkHighlight: React.FC<JSX.IntrinsicElements['code']> = (props) => {
  const className = props.className;
  const TITLE_STRING = ':title=';
  const DATALINE_START_STRING = '{';
  const DATALINE_END_STRING = '}';
  const LANG_STRING = 'language-';

  const hasTitle = className && className.match(/:title=/);
  const title =
    hasTitle && className.match(/:title=.*/)[0].replace(TITLE_STRING, '');

  const hasDataLine = className && className.match(/\{.*\}/);
  const dataLine =
    hasDataLine &&
    className
      .match(/\{.*\}/)[0]
      .replace(DATALINE_START_STRING, '')
      .replace(DATALINE_END_STRING, '');

  const hasLang = className && className.match(/language-[^\s]*/);
  let lang =
    hasLang && className.match(/language-[^\s]*/)[0].replace(LANG_STRING, '');

  lang = hasLang && hasTitle ? lang.replace(/:title=.*/, '') : lang;
  lang = hasLang && hasDataLine ? lang.replace(/\{.*\}/, '') : lang;

  const code = props.children[0];
  const dataLineRawItems = dataLine && dataLine.split(',');
  const dataLineArray =
    dataLineRawItems &&
    dataLineRawItems.map((item) => {
      if (item.match(/-/)) {
        const lineRange = item.split('-');
        const startLine = Number(lineRange[0]);
        const endLine = Number(lineRange[1]);
        const lineRangeArray = Array.from(
          { length: endLine - startLine + 1 },
          (_, i) => {
            return startLine + i;
          }
        );
        return lineRangeArray.map((line) => {
          return line;
        });
      } else {
        return Number(item);
      }
    });
  return lang ? (
    <div className={styles.root}>
      {title && <div>{title}</div>}
      <SyntaxHighlighter
        language={lang}
        style={theme}
        showLineNumbers={true}
        showInlineLineNumbers={true}
        wrapLines={true}
        lineProps={(lineNumber) => {
          const ACCENT_COLOR = '#3e3e3e';
          const NONE = 'none';
          const BLOCK = 'block';
          let style: { display; backgroundColor?; textShadow? } = {
            display: BLOCK,
          };
          dataLineArray &&
            dataLineArray.map((line) => {
              if (Array.isArray(line)) {
                return (style = {
                  display: BLOCK,
                  backgroundColor: line.includes(lineNumber) && ACCENT_COLOR,
                  textShadow: line.includes(lineNumber) && NONE,
                });
              } else {
                return (style = {
                  display: BLOCK,
                  backgroundColor: line === lineNumber && ACCENT_COLOR,
                  textShadow: line === lineNumber && NONE,
                });
              }
            });
          return { style };
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  ) : (
    <SyntaxHighlighter
      language={'inline'}
      style={theme}
      className={styles.inline}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default RemarkHighlight;
