import { favicon, logo } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
};
export const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a
      href='/'
      className='dark'
    >
      {variant === 'default' && (
        <img
          src={logo}
          alt='logo'
          width={150}
          height={31}
          className=''
        />
      )}
      {variant === 'icon' && (
        <img
          src={favicon}
          alt='logo'
          width={32}
          height={32}
          className=''
        />
      )}
    </a>
  );
};
