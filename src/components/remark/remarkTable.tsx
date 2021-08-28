import styles from '@styles/component/article__table.module.scss';

const RemarkTable: React.FC<JSX.IntrinsicElements['table']> = (props) => {
  return (
    <div className={styles.root}>
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
