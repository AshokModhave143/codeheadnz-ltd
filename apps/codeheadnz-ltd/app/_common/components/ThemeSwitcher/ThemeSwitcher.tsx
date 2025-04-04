'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@heroui/react';
import { MdBrightness3, MdWbSunny } from 'react-icons/md';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === 'dark'}
      size="lg"
      color="success"
      startContent={<MdBrightness3 />}
      endContent={<MdWbSunny />}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </Switch>
  );
};
