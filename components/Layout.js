const Layout = ({ children }) => {
  return (
    <div className='min-h-full py-0 px-2 flex flex-col justify-start items-center'>
      <main className='py-20 px-0 flex-1 flex flex-col justify-start items-center text-xl'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
