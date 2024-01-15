import './global.css';
import AppRoot from './_common/components/AppRoot';
import { unstable_noStore as noStore } from 'next/cache';
import { AppConfigState } from './_common/redux/appConfigSlice';

export const metadata = {
  title: 'Codehead NZ LTD',
  description: 'Codehead NZ LTD company profile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  noStore();

  const env = {
    ENVIORNMENT: process.env.ENVIORNMENT,
  } as AppConfigState['environmentVariables'];

  return (
    <html lang="en" className="dark">
      <body>
        {/* <AppRoot env={env}>{children}</AppRoot> */}
        <div>This is sample page for testing {env.ENVIORNMENT}</div>
      </body>
    </html>
  );
}
