import React from 'react';

interface SearchChooseCategoryProps {
  name: string;
  onChildClick: (data: string) => void;
  searchInWhichCategory: string;
}

export const SearchChooseCategory: React.FC<SearchChooseCategoryProps> = ({
  name,
  onChildClick,
  searchInWhichCategory,
}) => {
  return (
    <li className="inline-flex items-center">
      <button
        className="flex items-center"
        onClick={(e) => {
          const buttonElement = e.target as HTMLButtonElement;
          const inputElement = buttonElement.querySelector('input');
          if (inputElement) {
            inputElement.checked = true;
            onChildClick(inputElement.value);
          }
        }}
      >
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor={name}
          data-ripple-dark="true"
        >
          <input
            id={name}
            name="type"
            type="radio"
            value={name}
            tabIndex={-1}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-red-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-600 checked:before:bg-red-600 hover:before:opacity-10"
            onChange={(e) => onChildClick(e.target.value)}
            checked={name === searchInWhichCategory ? true : false}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-red-600 opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle
                data-name="ellipse"
                cx="8"
                cy="8"
                r="8"
              ></circle>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-300"
          htmlFor={name}
        >
          {name}
        </label>
      </button>
    </li>
  );
};
