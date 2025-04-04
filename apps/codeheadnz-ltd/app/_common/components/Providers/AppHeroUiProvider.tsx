'use client';

import { HeroUIProvider } from '@heroui/react';
import { useRouter } from 'next/navigation';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export const AppHeroUiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const useRef = (href: string) => process.env.BASE_PATH + href;

  return (
    <HeroUIProvider navigate={router.push} useHref={useRef}>
      {children}
    </HeroUIProvider>
  );
};
