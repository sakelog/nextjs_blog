import styles from '../../styles/Object/Component/_c-article__Table.module.scss';

const RemarkTable = (props: JSX.IntrinsicElements['table']) => {
  return (
    <div className={styles.root}>
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
