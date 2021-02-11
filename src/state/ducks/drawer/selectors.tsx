import { useSelector } from 'react-redux';
import { RootState } from '@state/store';

const drawerSelector = (): boolean => {
  return useSelector((state: RootState) => {
    return state.drawerState.show;
  });
};

export default { drawerSelector };
