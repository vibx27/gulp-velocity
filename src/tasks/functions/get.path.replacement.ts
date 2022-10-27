export default function getPathReplacement(tsconfig): string {
  return `npx tsc-alias -f -p ${tsconfig}`;
}
