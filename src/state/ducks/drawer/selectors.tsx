import { useSelector } from 'react-redux';
import { RootState } from '@state/store';

const drawerSelector = (): string => {
  return useSelector((state: RootState) => {
    return state.drawerState.show;
  });
};

export default { drawerSelector };
