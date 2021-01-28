export const getWindowSize = (): { width: number; height: number } => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
