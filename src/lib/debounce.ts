export function debounce<A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number = 300
): (args: A) => Promise<R> {
  let timer: NodeJS.Timeout;

  const debouncedFunc = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        resolve(fn(args));
      }, ms);
    });

  return debouncedFunc;
}
