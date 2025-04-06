export function Card({ title, review, rating, reviewer,date }) {
  return (
    <div className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 w-md m-3 bg-white dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
        <div className="mt-4 sm:mt-0">
        <h3 className="text-lg font-medium text-pretty text-white">
            {title}
        </h3>
        <p className="mt-1 text-sm text-white-700">By {reviewer}</p>
        <p className="mt-4 line-clamp-2 text-m text-pretty text-white-700">
            {review}
        </p>
        </div>
    </div>
    <dl className="mt-6 flex gap-4 lg:gap-6">
        <div className="flex items-center gap-2">
        <dt className="text-gray-400">
            <span className="sr-only"> Published on </span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
            </svg>
        </dt>
        <dd className="text-xs text-gray-400">{date}</dd>
        </div>
        <div className="flex items-center gap-2">
        <dt className="text-gray-400">
            <span className="sr-only"> Reading time </span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
            </svg>
        </dt>
        <dd className="text-xs text-gray-400">{rating}</dd>
        </div>
    </dl>
    </div>
  );
}

