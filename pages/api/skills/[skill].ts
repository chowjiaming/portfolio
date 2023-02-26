import {type NextApiRequest, type NextApiResponse} from 'next';
import {type Skill} from '@/utils/types';
import data from '@/data/skills.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | Skill
    | {
        statusCode: number;
        message: string;
      }
  >
) {
  const {title} = req.query;
  if (!title) {
    return res.status(400).json({statusCode: 400, message: 'Bad request'});
  }
  if (Array.isArray(title)) {
    return res.status(400).json({statusCode: 400, message: 'Invalid query'});
  }

  const skill = data.skills.find((skill) => skill.title === title);

  if (!skill) {
    return res.status(404).json({statusCode: 404, message: 'Not found'});
  }

  return res.status(200).json(skill);
}
