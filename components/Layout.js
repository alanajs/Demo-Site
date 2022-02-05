import Nav from './Nav';
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        
        </>
    )
}
