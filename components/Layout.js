import Header from './Header'
import Hero from './Hero'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
