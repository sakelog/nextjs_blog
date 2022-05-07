type PropTypes = {
  yyyy: string;
  mm: string;
  dd: string;
};

const DateDisplay = ({ yyyy, mm, dd }: PropTypes) => (
  <div className="bg-theme p-2 w-fit rounded">
    <div className="text-center mb-1">{yyyy}</div>
    <div className="p-2 bg-white rounded-sm flex items-center gap-1">
      <span className="text-xl">{mm}</span>
      <span>/</span>
      <span className="text-xl">{dd}</span>
    </div>
  </div>
);

export default DateDisplay;
