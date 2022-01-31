import Nav from './Nav';
import Sidebar from './NestedLayout'
// import Footer from './footer'
// import NestedLayout from '../components/NestedLayout'

export default function Layout({ children }) {
    return (
        <>
        {/* <div> */}
            <Nav />
        {/* </div> */}
            <main>{children}</main>
            {/* <Footer /> */}
        
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