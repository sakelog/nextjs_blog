import { useSelector } from 'react-redux';
import { RootState } from '@state/store';

const widthSelector = (): number => {
  return useSelector((state: RootState) => {
    return state.windowSizeState.width;
  });
};
const heightSelector = (): number => {
  return useSelector((state: RootState) => {
    return state.windowSizeState.height;
  });
};

export default { widthSelector, heightSelector };
