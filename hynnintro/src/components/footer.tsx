const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="w-14 h-14">
              <img src="Logo_NonBack.png" alt="" />
            </div>
            <span className="ml-3 text-xl">Hynn-Hyunwoong</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Hynn-Development
            <a
              href="https://github.com/Hynn-Hyunwoong"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Hynn-Hyunwoong
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
