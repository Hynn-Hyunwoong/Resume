import { NextPage } from 'next';

const Project: NextPage<{ data: any[] }> = ({ data }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((item: any) => {
            const title = item.properties.Name.title[0].text.content;
            const description =
              item.properties.Description.rich_text[0].text.content;
            const cover = item.cover.external.url;
            const tags = item.properties.Tags.multi_select.map(
              (tag: any) => tag.name,
            );
            const team = item.properties['Team'].rich_text[0].text.content;
            const externalUrl = item.public_url;

            return (
              <div className="p-4 md:w-1/3" key={item.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={cover}
                    alt={item.id}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {team}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {title}
                    </h1>
                    <div className="flex items-start mt-2">
                      {tags.map((tag: any, index: number) => (
                        <h1
                          className="px-2 py-1 mr-2 rounded-md bg-sky-200"
                          key={index}
                        >
                          {tag}
                        </h1>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={externalUrl}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
