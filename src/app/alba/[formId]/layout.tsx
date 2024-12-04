const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Carousel />
    <main className="mx-auto flex max-w-[1560px] justify-center">
      {children}
    </main>
  );
};

export default layout;
