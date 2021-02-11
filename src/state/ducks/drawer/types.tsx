export type drawer = {
  show: boolean;
};
export type drawerState = drawer & {
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

const INIT = 'init';
const OPEN = 'open';
const CLOSE = 'close';

export default { INIT, OPEN, CLOSE };
