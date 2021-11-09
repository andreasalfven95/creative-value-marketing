import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='cursor-default'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
