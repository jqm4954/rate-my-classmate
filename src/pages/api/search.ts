import {NextApiRequest, NextApiResponse} from 'next';
//todo: fix this
import {Profile} from 'src/pages/profile'; 

interface SearchQuery {
  q: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const {q}: SearchQuery = req.query;

    if (!q) {
      res.status(400).json({ message: 'Search query is required' });
      return;
    }

    const results: Profile[] = searchUsers(q); // TODO: Replace this with search function

    res.status(200).json(results);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

function searchUsers(query: string): Profile[] {
  //stock implemention w/ array of users
  const mockUsers: Profile[] = [
    {
      name: 'Joe Brandon',
      major: 'Computer Science'
    },
    {
      name: 'Kamala Harris',
      major: 'Mathematics'
    },
    {
      name: 'Barack Obamna',
      major: 'Biology'
    },
    {
      name: 'Donny T',
      major: 'Computer Science'
    }
  ];

  const lowercaseQuery = query.toLowerCase();

  const results = mockUsers.filter(user => {
    const lowercaseName = user.name.toLowerCase();
    const lowercaseMajor = user.major.toLowerCase();

    return lowercaseName.includes(lowercaseQuery) || lowercaseMajor.includes(lowercaseQuery);
  });

  return results;
}