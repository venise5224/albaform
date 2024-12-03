const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex max-w-[1560px] justify-center">
      {/* <Carousel /> */}
      {children}
    </main>
  );
};

export default layout;
