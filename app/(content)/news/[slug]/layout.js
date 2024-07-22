function Layout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default Layout;
