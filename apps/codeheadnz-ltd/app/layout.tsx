import './global.css';
import { AppRoot } from './_common/components/AppRoot';

export const metadata = {
  title: 'Codehead NZ LTD',
  description: 'Codehead NZ LTD company profile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <AppRoot>{children}</AppRoot>
      </body>
    </html>
  );
}
