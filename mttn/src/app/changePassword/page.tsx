import ChangePassword from './ChangePassword';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
export default function ChangePasswordPage() {
    return (
        <>
            <Nav isLoggedIn={true}/>
            <ChangePassword />
            <Footer />
        </>
    )
}