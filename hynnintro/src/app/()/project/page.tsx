import { FC } from 'react';
import axios from 'axios';
import { DATABASE_ID, API_KEY } from '@/app/config/Index';
import {
  Project,
  ProjectProps,
  ApiResponse,
} from '@/Data/Interface/notion.interface';

const notionData = async () => {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    data: { page_size: 100 },
  };

  const res = await axios<ApiResponse>(options);
  const data = res.data;

  return {
    props: { data },
  };
};

const Project: FC<ProjectProps> = async ({}) => {
  const data = (await notionData()).props;
  console.log(data);
  return (
    <div>
      <p>123</p>
    </div>
  );
};

export default Project;
