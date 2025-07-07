function sumn(n: number): number {
  if (n <= 0) {
    return 0;
  }
  return sumn(n - 1) + n;
}
