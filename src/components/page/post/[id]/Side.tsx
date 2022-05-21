// components
import Bio from './Bio';
import TOC from './TOC';
import AdForPostSide from './AdForPostSide';

type PropTypes = {
  tocItems: Array<Content.TOCItem>;
};

const Side = ({ tocItems }: PropTypes) => (
  <>
    <Bio />
    <AdForPostSide />
    <div
      className="uk-visible@m"
      style={{ border: '1px solid #666666' }}
      data-uk-sticky="offset:100"
    >
      <div className="uk-background-muted uk-padding-small">
        目次
      </div>
      <div className="uk-height-max-medium uk-overflow-auto uk-padding-small">
        <TOC tocItems={tocItems} />
      </div>
    </div>
  </>
);
export default Side;
