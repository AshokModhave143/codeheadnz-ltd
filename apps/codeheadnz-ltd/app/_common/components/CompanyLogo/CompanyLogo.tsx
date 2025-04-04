import { appName } from '@common/config';
import { Link } from '@heroui/link';
import { useRouter } from 'next/navigation';

export interface CompanyLogoProps {}

export const CompanyLogo = (_props: CompanyLogoProps) => {
  const router = useRouter();
  const config = {
    companyName: appName,
    logoUrl: '/static/images/codeheadnz-logo.png',
    baseUrl: '/',
  };

  const handleOnClick = () => {
    router.push(config.baseUrl);
  };

  return (
    <Link
      className="flex justify-start items-center gap-1"
      onPress={handleOnClick}
    >
      <div
        className="bg-cover bg-center bg-no-repeat h-12 w-12 sm:h-16 sm:w-16"
        style={{
          backgroundImage: `url(${config.logoUrl})`,
        }}
      />
      <p className="font-bold text-xl sm:text-2xl text-inherit">
        {config.companyName}
      </p>
    </Link>
  );
};
