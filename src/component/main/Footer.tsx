export const Footer = () => {
  return (
    <footer className=" shadow bg-black mb-8">
      <div className="w-full max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center"
          >
            <img
              src="https://logodix.com/logo/581240.png"
              className="h-8"
              alt="Star Wars"
            />
          </a>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6 "
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023{' '}
          <a
            href="/"
            className="hover:underline"
          >
            StarWars™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
