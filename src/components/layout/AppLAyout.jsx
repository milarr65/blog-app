import Drawer from '../Drawer'
import CreatePostBtn from './CreatePostBtn'
import Footer from './footer'
import Navbar from './nabvar'
import ScrollBtn from './ScrollBtn'

export default function AppLayout({ children }) {
  return (
    <Drawer>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-grow flex-col items-center p-4">{children}</main>
        <ScrollBtn />
        <CreatePostBtn />
        <Footer />
      </div>
    </Drawer>
  )
}
