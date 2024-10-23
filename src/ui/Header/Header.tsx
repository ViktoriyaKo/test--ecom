'use client';
import { ROUTERS } from '@/constants/routers';
import Link from 'next/link';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';
 
const Header = () => {
  const name = 'Вика';

  const pathname = usePathname();
  const isHeader = pathname !== '/';

  return (
    isHeader && (
      <header className={styles.header}>
        <nav>
          <ul className={styles.routers}>
            {ROUTERS.map((router) => {
              const { href, title } = router;
              return (
                <li className={styles.router} key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.userInfo}>
          <p className={styles.name}>{name}</p>
          <div className={styles.userLogo}>{name[0]}</div>
        </div>
      </header>
    )
  );
};

export default Header;
