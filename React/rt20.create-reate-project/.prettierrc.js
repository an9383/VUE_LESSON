// .js 파일은 주석이 가능
// .json 파일 주석이 안된다..
module.exports = {
  /* https://prettier.io/docs/en/options.html */
  printWidth: 130 /* 한 줄에 130컬럼까지 허용 */,
  tabWidth: 2 /* tab을 누르면 2칸 들여쓰기 */,
  singleQuote: true /*문자열 리터럴로 " 대신 ' 을 사용 */,
  semi: true /* 문장 마지막에 ; 추가 */,
  useTabs: false /* 탭 대신 공백을 사용 */,
  trailingComma: 'all',
  proseWrap: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false /* JSX 안에서는 " 을 사용 */,
  quoteProps: 'as-needed',
  endOfLine: 'crlf'
};
