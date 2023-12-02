export const NoFoundMessage = ({ noFoundWord }: { noFoundWord: string }) => {
  return (
    <div className="text-2xl col-span-12 py-4 md:col-span-10 md:col-start-2 md:py-28 lg:col-span-6 lg:col-start-4 lg:px-10 lg:py-20">
      We're sorry, but the search for "{' '}
      <span className="text-red-500">{noFoundWord}</span>" did not yield any
      results. Please double-check the spelling or try a different name
    </div>
  );
};
