import {type NextApiRequest, type NextApiResponse} from 'next';
import {type Skill} from '@/utils/types';
import data from '@/data/skills.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill[]>
) {
  return res.status(200).json(data.skills);
}
