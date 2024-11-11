import ChangePassword from './ChangePassword';
import Nav from '../components/Nav';
export default function ChangePasswordPage() {
    return (
        <>
            <Nav isLoggedIn={true}/>
            <ChangePassword />
        </>
    )
}