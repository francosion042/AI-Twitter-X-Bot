export const getRandomItem = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const extractCodeSnippetData = (response: string): string[] => {
  const snippets: string[] = [];
  const lines = response.split('\n');
  let snippet = '';
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        snippet = '';
      } else {
        inCodeBlock = false;
        snippets.push(snippet);
      }
    } else if (inCodeBlock) {
      snippet += line + '\n';
    }
  }

  return snippets;
};
