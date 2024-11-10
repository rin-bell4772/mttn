import Settings from './Settings';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function SettingsPage() {
    return (
        <>
            <Nav />
            <Settings settings={{ username: 'mttn', email: 'mttn@gmail.com', 
                profilePicture: 'https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png'}} />
            <Footer />
        </>
    )
}