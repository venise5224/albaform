const isUrlEncoded = (string: string) => {
  const regex = /%[0-9A-Fa-f]{2}/; // % 뒤에 두 자리 16진수 확인
  return regex.test(string);
};

export default isUrlEncoded;
