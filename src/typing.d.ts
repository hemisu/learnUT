declare namespace jest {
  interface Matchers<R, T = {}> {
    toBeBetweenZeroAndTen(): void;
  }
}