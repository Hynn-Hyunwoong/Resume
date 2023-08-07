const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="w-14 h-14">
              <img src="Logo_NonBack.png" alt="" />
            </div>
            <span className="ml-3 text-xl">Hynn을 소개합니다.</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-blue-500" href="/">
              홈
            </a>
            <a className="mr-5 hover:text-blue-500" href="/about">
              소개
            </a>
            <a className="mr-5 hover:text-blue-500" href="nonDev">
              비개발자로서의 걸어온 길
            </a>
            <a className="mr-5 hover:text-blue-500" href="dev">
              기술스택
            </a>
            <a className="mr-5 hover:text-blue-500" href="project">
              프로젝트
            </a>
            <a
              className="mr-5 hover:text-blue-500"
              href="https://hyunsign.tistory.com/"
            >
              Blog
            </a>
            <a
              className="mr-5 hover:text-blue-500"
              href="https://github.com/Hynn-Hyunwoong"
            >
              Github
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
