type PropsType = JSX.IntrinsicElements['table'];

const RemarkTable = (props: PropsType) => {
  return (
    <div className="p-articleBody__table">
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
