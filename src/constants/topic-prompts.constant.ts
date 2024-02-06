import { TopicPromptType } from '../commons/types';

const topicPrompts: TopicPromptType[] = [
  {
    topic: 'Backend Engineering',
    userProfession: 'Backend Engineer',
    prompt:
      "Craft a short tweet about Backend Engineering. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'Database Administration',
    userProfession: 'Database Administrator',
    prompt:
      "Craft a short tweet about Database Administration. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'SQL',
    userProfession: 'Database Administrator',
    prompt:
      "Craft a short tweet about SQL. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'API Security',
    userProfession: 'NodeJs Backend Engineer',
    prompt: `Craft a short tweet about API Security. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.`,
  },
];

export default topicPrompts;
