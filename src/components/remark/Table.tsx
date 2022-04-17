import styles from '@styles/Object/Component/_c-table.module.scss';

type PropsType = JSX.IntrinsicElements['table'];

const RemarkTable = (props: PropsType) => {
  return (
    <div className={styles.root}>
      <table {...props} />
    </div>
  );
};

export default RemarkTable;
