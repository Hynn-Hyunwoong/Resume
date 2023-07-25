import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/animation';

const Home = () => {
  return (
    <>
      <Header />
      {/* Section 1  */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="typescript.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              개발자가 되기 위해 준비했습니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              비개발자로서의 직무를 수행하면서 개발자와 많은 소통을 하는
              과정에서 직무에 흥미를 느끼고, 전문적인 기술을 익히고 싶었습니다.
              <br />
              다른사람보다 늦게 시작했지만, 개발자로서의 역량을 키우기 위해 더욱
              몰두하고 준비했습니다.
              <br />
              항상 새로운 기술, 트랜드를 익히는데 관심이 많습니다.
            </p>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg">
              비개발자로서의 저는 다양한 IT회사에서 <br />
              기술지원 및 서비스지원 직무를 수행하면서 개발자와 직접적인 소통을
              하며 업무를 해왔습니다.
              <br />
              이를 통해 개발자로서의 직무를 오랜시간 간접적으로 경험하였고,
              <br />
              개발자와의 소통을 원할하게 이루 기 위해 컴퓨터 지식 및 용어를
              공부하는 계기를 만들었습니다. <br />
              이러한 과정에서
              <br />
              다양한 문제해결경험, 민감한 문제들을 해결해 나 가는 과정을 보면서,
              <br />
              개발자의 직무에 동경을 가지게 되었습니다.
              <br />
              이를 통해 개발자 직무로의 전환을 위해,
              <br />
              병역의무를 마침과 동시에 직무전환을 하게되었습니다.
              <br />
              <br />
              단순히 개발을 잘하는 사람 이전에, 비개발자로서의 시각, 통찰력을
              가지고
              <br />
              신입 개발자로서 더욱 빠르게 성장하고 싶습니다.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              비개발자로서의 경험도 도움이 된다고 믿습니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              단순히 개발자시각에서만 바라보지 않고,
              <br />
              외국계 IT 회사에서 다양한 사용자의 사용경험을 관리, 개선하면서
              사용자의 입장에서 생각하는 시각을 가지고 있습니다.
              <br />
              이를 통해 다양한 시각에서 문제를 바라보고, 개선할 수 있는 능력,
              시각을 갖추고 있습니다.
              <br />
              또한 다양한 이용자들과 소통하면서, 어떤 상황에서도 흔들리지 않는
              멘탈을 가지고 있습니다.
              <br />
              이를 통해 항상 꾸준하고, 발전할 수 있는 개발자가 되겠습니다.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="linux.png"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
