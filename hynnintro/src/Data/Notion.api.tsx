import axios from 'axios';
import { GetStaticProps } from 'next';
import { DATABASE_ID, API_KEY } from '@/app/config/Index';
import { Project, ApiResponse } from './Interface/notion.interface';

const getStaticProps: GetStaticProps = async () => {
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
  const projectIds = data.results.map(
    (aProject: Project) => aProject.properties.Name.title[0].plain_text,
  );

  console.log(`This Console is Data/NotionAPIs:  `, projectIds);

  return {
    props: { projectIds },
  };
};

export default getStaticProps;
