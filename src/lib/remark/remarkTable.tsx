import { tableStyles as useStyles } from '@styles/component/article__table.style';

const RemarkTable: React.FC<JSX.IntrinsicElements['table']> = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
