import Nav from './Nav';
import Sidebar from './Sidebar'
import Footer from './Footer'
// import NestedLayout from '../components/NestedLayout'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        
        </>
    )
}

// Layout.getLayout = function getLayout(page) {
//     return (
//       <Layout>
//         <NestedLayout>{page}</NestedLayout>
//       </Layout>
//     )
//   }


// export function LayoutSidebar({children}){
//     return(
//         <>
//         <Sidebar/>
//         <main>{children}</main>
//         </>
//     )
// }