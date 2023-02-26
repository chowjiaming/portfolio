import {type NextApiRequest, type NextApiResponse} from 'next';
import {type Project} from '@/utils/types';
import data from '@/data/projects.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  return res.status(200).json(data.projects);
}
