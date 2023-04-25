'use client';

import Container from '@ui/Container';
import Logo from '@components/navbar/Logo';
import Search from '@components/navbar/Search';
import UserMenu from '@components/navbar/UserMenu';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
