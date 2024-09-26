import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import GateCS from './GateCS.jsx'
 const Blog = () => {
    return(
        <>
            <Navbar/>
            <div className='primary'>
                <GateCS/>
            </div>
            <Footer/>
        </>
    );
}
export default Blog;