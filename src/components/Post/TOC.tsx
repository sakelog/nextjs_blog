import ReactMarkdown from 'react-markdown';

const TocItem = ({
  children,
  depth,
}: {
  children: React.ReactNode;
  depth: number;
}) => (
  <div className="my-2" style={{ marginLeft: depth * 10 }}>
    <a href={`#${children[0].toString()}`}>{children[0]}</a>
  </div>
);

const TOC = ({ rowBody }: { rowBody: string }) => (
  <div className="text-sm overflow-hidden">
    <h2 className="text-lg text-center bg-gray-200">
      目次
    </h2>
    <div className="md:h-72 overflow-x-hidden md:overflow-y-scroll border-2 border-gray-200 u-scrollbar">
      <ReactMarkdown
        allowedElements={['h2', 'h3']}
        skipHtml
        components={{
          h2: ({ children }) =>
            TocItem({ children, depth: 2 }),
          h3: ({ children }) =>
            TocItem({ children, depth: 3 }),
        }}
      >
        {rowBody}
      </ReactMarkdown>
    </div>
  </div>
);

export default TOC;
