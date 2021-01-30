import styles from '@styles/component/_c-article__Table.module.scss';

const RemarkTable: React.FC<JSX.IntrinsicElements['table']> = (props) => {
  return (
    <div className={styles.root}>
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
