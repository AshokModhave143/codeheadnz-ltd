export default function AuthenticateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-2">
      <main className="flex flex-col items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
}
