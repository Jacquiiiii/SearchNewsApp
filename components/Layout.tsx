import Nav from "./Nav"

interface LayoutProps {
  title: string;
  footer: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, footer, children}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <h1 style={{ margin: '15px' }}>{title}</h1>
      <hr style={{ margin: '10px' }} />
      <div style={{ flex: 1 }}>{children}</div>
      <hr style={{ margin: '10px' }} />
      <h4 style={{ margin: '15px' }}>{footer}</h4>
    </div>
  )
}

export default Layout