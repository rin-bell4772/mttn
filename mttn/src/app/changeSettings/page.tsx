import ChangeSettings from './ChangeSettings';
import Nav from '../components/Nav';

export default function ChangeSettingsPage() {
    return (
        <>
            <Nav isLoggedIn={true}/>
            <ChangeSettings settings={{ username: 'mttn', email: 'mttn@gmail.com' 
                , profilePicture: 'https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png'
            }}/>
        </>
    )
}