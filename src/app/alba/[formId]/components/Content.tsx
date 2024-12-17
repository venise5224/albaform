const Content = ({ description }: { description: string }) => {
  return (
    <p className="px-6 py-4 text-md text-black-400 pc:text-2xl tablet:text-lg">
      {description}
    </p>
  );
};

export default Content;
