export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container mx-auto h-max-content w-screen">
      {children}
    </section>
  );
};
