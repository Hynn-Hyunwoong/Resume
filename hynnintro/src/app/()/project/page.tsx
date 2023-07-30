import { FC, useState } from 'react';
import axios from 'axios';
import { DATABASE_ID, API_KEY } from '@/app/config/Index';

const getNotionData = async () => {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: '',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };
  const res = await axios(options);
  if (!res) {
    throw new Error('Notion API Error');
  }

  return res.data.results;
};

// Check Fetching data

const Project: FC = async () => {
  const data = await getNotionData();
  const projects = data.map((item: any) => ({
    title: item.properties.Name.title[0].text.content,
    description:
      item.properties.Description.rich_text
        .map((text: any) => text.text.content)
        .join(' ')
        .substring(0, 150) +
      (item.properties.Description.rich_text
        .map((text: any) => text.text.content)
        .join(' ').length > 150
        ? '...'
        : ''),
    cover: item.cover.external.url,
    tags: item.properties.Tags.multi_select
      .map((tag: any) => tag.name)
      .join(', '),
    team: item.properties['Team'].rich_text[0].text.content,
    externalUrl: item.public_url,
  }));
  const tagColors: { [tag: string]: string } = {
    Solidity: 'bg-red-200',
    'Ether.js': 'bg-blue-200',
    React: 'bg-green-200',
    JavaScript: 'bg-yellow-200',
    'Styled Component': 'bg-indigo-200',
    TailwindCSS: 'bg-pink-200',
    Recharges: 'bg-purple-200',
    WalletConnect: 'bg-red-300',
    MetaMask: 'bg-blue-300',
    TrustWallet: 'bg-green-300',
    Axios: 'bg-yellow-300',
    ReactQuery: 'bg-indigo-300',
    Recoil: 'bg-pink-300',
    TypeScript: 'bg-purple-300',
    Express: 'bg-red-400',
    MySQL: 'bg-blue-400',
    Sequelize: 'bg-green-400',
    'AWS S3': 'bg-yellow-400',
    EC2: 'bg-indigo-400',
    Hardhat: 'bg-pink-400',
    OpenZeppelin: 'bg-purple-400',
    Mocha: 'bg-red-500',
    Chai: 'bg-blue-500',
    RemixIDE: 'bg-green-500',
    UniSwap: 'bg-yellow-500',
    OracleService: 'bg-indigo-500',
    GithubActions: 'bg-pink-500',
    NGINX: 'bg-purple-500',
    CERTBOOT: 'bg-red-600',
    RDS: 'bg-blue-600',
    HTML: 'bg-green-600',
    CORS: 'bg-yellow-600',
    'React Redux': 'bg-indigo-600',
    'React Thunk': 'bg-pink-600',
    Jest: 'bg-purple-600',
    'Node-Scheduler': 'bg-red-700',
    Passport: 'bg-blue-700',
    환율API: 'bg-green-700',
    'NAVER-SENS': 'bg-yellow-700',
    ROUTE53: 'bg-indigo-700',
    CSS: 'bg-pink-700',
    Nunjucks: 'bg-purple-700',
    Multer: 'bg-red-800',
    SocketIO: 'bg-blue-800',
    CKEditor: 'bg-green-800',
    ToastEditor: 'bg-yellow-800',
    NodeJS: 'bg-indigo-800',
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projects.map((project: any, index: number) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.cover}
                    alt={`cover-${index}`}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {project.team}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <div className="flex flex-wrap items-start mt-2">
                      {project.tags
                        .split(', ')
                        .map((tag: string, tagIndex: number) => (
                          <h1
                            className={`px-2 py-1 mr-2 rounded-md ${tagColors[tag]} text-white`}
                            key={`tag-${tagIndex}`}
                          >
                            {tag}
                          </h1>
                        ))}
                    </div>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={project.externalUrl}
                      >
                        자세히 보기
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
