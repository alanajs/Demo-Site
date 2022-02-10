import Nav from './Nav';
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Nav class="w-full"/>
            <main>{children}</main>
            <Footer />
        
        </>
    )
}
