export type windowSize = {
  width: number;
  height: number;
};
export type windowSizeState = windowSize & {
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

const SET_WINDOW_SIZE = 'setWindowSize';

export default { SET_WINDOW_SIZE };
