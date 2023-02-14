interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex w-[90%] max-w-[900px] rounded-xl bg-white py-3 md:h-[90%] md:w-4/5 md:gap-4 md:p-4">
      {children}
    </main>
  );
};

export default Layout;
