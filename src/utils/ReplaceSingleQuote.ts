export const replaceSingleQuote = (text: string) => {
  while (text.includes("&#39;")) {
    text = text.replace("&#39;", "'");
  } 
  return text
}
