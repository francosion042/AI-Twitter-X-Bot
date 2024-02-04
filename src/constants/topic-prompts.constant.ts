import { TopicPromptType } from '../commons/types';

const constraints =
  'Constraints:\n' +
  "1. Just write the Tweet, don't write anything else.\n" +
  "2. Don't exceed 270 characters.\n" +
  "3. Don't use quotation marks.\n" +
  '4. Use 3 relevant hashtags.\n' +
  "5. Don't use emojis.";

const topicPrompts: TopicPromptType[] = [
  {
    topic: 'Backend Engineering',
    userProfession: 'Backend Engineer',
    prompt:
      'Craft a tweet that includes content related to this topic: Backend Engineering \n' +
      constraints,
  },
  {
    topic: 'Database Administration',
    userProfession: 'Database Administrator',
    prompt:
      'Craft a tweet that includes content related to this topic: Database Administration \n' +
      constraints,
  },
  {
    topic: 'AdonisJs - A NodeJs Framework',
    userProfession: 'Backend Engineer',
    prompt:
      `Craft a tweet that includes content related to this topic: AdonisJs - A NodeJs Framework \n` +
      constraints,
  },
];

export default topicPrompts;

/*
Constraints:
1. Just write the Tweet, don't write anything else.
2. Don't exceed 270 characters.
3. Don't use quotation marks.
4. Use 3 relevant hashtags.
5. Don't use emojis.
*/
