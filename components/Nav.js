import Link from 'next/link';
const Nav = () => {
  return (
    <nav className='h-12 p-2 bg-black flex items-center justify-start text-white'>
      <ul className='flex justify-center items-center'>
        <li className='py-1 px-4'>
          <Link href='/'>Home</Link>
        </li>
        <li className='py-1 px-4'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
