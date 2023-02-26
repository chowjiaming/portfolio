import {type NextApiRequest, type NextApiResponse} from 'next';
import {type Project} from '@/utils/types';
import data from '@/data/projects.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | Project
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

  const project = data.projects.find((project) => project.title === title);

  if (!project) {
    return res.status(404).json({statusCode: 404, message: 'Not found'});
  }

  return res.status(200).json(project);
}
