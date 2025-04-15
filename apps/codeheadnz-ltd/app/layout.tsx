import './globals.css';
import { AppRoot } from './_common/components/AppRoot';
import { unstable_noStore as noStore } from 'next/cache';
import { AppConfigState } from './_common/redux/appConfigSlice';
import { Spinner } from '@heroui/react';

export const metadata = {
  title: 'Codehead NZ LTD',
  description: 'Codehead NZ LTD company profile',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
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

  if (!env.ENVIORNMENT) {
    return (
      <Spinner className="flex justify-center items-center h-screen w-screen" />
    );
  }

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AppRoot env={env}>{children}</AppRoot>
      </body>
    </html>
  );
}
