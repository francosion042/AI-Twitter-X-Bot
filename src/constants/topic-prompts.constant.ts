import { TopicPromptType } from '../commons/types';

const constraints =
  'Constraints:\n' +
  'The content should not exceed 270 characters.\n' +
  'The content should be very technical.\n' +
  "Don't enclose the content in quotation marks.\n" +
  "Don't use emojis. \n";

const topicPrompts: TopicPromptType[] = [
  {
    topic: 'Backend Engineering',
    userProfession: 'Backend Engineer',
    prompt:
      'Craft a tweet that includes advanced interesting things like tips, features, etc related to this topic: Backend Engineering \n' +
      constraints,
  },
  {
    topic: 'Database Administration',
    userProfession: 'Database Administrator',
    prompt:
      'Craft a tweet that includes advanced interesting things like tips, features, etc related to this topic: Database Administration \n' +
      constraints,
  },
  {
    topic: 'SQL',
    userProfession: 'Database Administrator',
    prompt:
      'Craft a tweet that includes advanced interesting things like tips, features, etc related to this topic: SQL \n' +
      constraints,
  },
  {
    topic: 'AdonisJs',
    userProfession: 'NodeJs Backend Engineer',
    prompt:
      `Craft a tweet that includes advanced interesting things like tips, features, etc related to this topic: AdonisJs \n` +
      constraints,
  },
];

export default topicPrompts;
