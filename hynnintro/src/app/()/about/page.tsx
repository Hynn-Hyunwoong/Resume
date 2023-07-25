import Link from 'next/link';
const about = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="Logo_NonBack.png" alt="Logo" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  AppleCare Advisor - 2012.07~2014.07
                </h2>
                <p className="leading-relaxed">
                  iOS, macOS 사용자들의 기술문제, 서비스문제에 관한 전문가상담을
                  수행하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="Logo_NonBack.png" alt="Logo" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Management AppleCare - 2014.08~2015.08
                </h2>
                <p className="leading-relaxed">
                  기술지원 전문가 그룹에 개발자그룹과의 소통을 통해
                  <br />
                  새로운문제에 대한 교육 및 지역 내 기술문제를 파악하고 해결하는
                  업무를 수행하였습니다.
                  <br />
                  또한 다양한 사용자 및 상담사와의 소통을 통해 친화적
                  커뮤니케이션 스킬을 익혔습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="Logo_NonBack.png" alt="Logo" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Lead of Quality - 2015.08~2018.04
                </h2>
                <p className="leading-relaxed">
                  매년 출시하는 새로운 제품, Software 의 문제를 파악하고
                  <br />
                  개선하는 업무를 수행하였습니다.
                  <br />
                  업무를 수행하면서 다양한 시스템로그, 사용자로서의 시각,
                  개발자로서의 시각을 이해하고, <br />
                  이를 통해 문제를 파악하고 해결하는 역량을 키웠습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="Logo_NonBack.png" alt="Logo" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Apple Area Manager - 2016.04~2018.04
                </h2>
                <p className="leading-relaxed">
                  매주 1회 진행되는 정례 브리핑, 비정례 브리핑을 통해 개발자와의
                  더 많은 소통을 하며
                  <br />
                  한국 외에서도 발생하는 다양한 문제를 접하고, 해결하는 과정에
                  기여하였습니다.
                  <br />이 때 다양한 CS지식에 대해 접하게 되었고, 익숙하지 않은
                  IT 용어를 이해하고 학습하게 되었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              5
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="Logo_NonBack.png" alt="Logo" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  병역특례 - 2018.04~2020.8
                </h2>
                <p className="leading-relaxed">
                  국가의 의무를 수행하며, 산업기능요원으로서 병역의무를
                  수행하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="NonAbout3.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              개발자가 되기 위해 준비했습니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              다양한 환경에 빠르게 적응하고 새로운 문제에 부딪히면 문제를 단순히
              해결하는데에만 치중하지 않습니다.
              <br />
              문제를 객관적으로 파악하고, 주요 문제의 원인을 분리하면서 해결 뿐
              아니라 문제의 원인에 집중하는 자세를 가지고 있습니다.
              <br />
              이러한 자세를 통해 문제를 해결하는데에 있어서 더욱 효율적이고
              문제를 접할때 마다 한단계 발전하는 개발자로 성장하고 있습니다.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
