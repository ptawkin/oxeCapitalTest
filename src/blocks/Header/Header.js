import Menu from "../Menu/Menu";

import './Header.scss';
import logo from '../../img/oxecapital.png';

function Header() {

    return (
        <div className="header">
            <div className={'header_part header_part__left'}>
                <a href={'/'} className={'header_logo'}>
                    <img src={logo} alt={'logo'}/>
                </a>
            </div>

            <div className={'header_part header_part__right'}>
                <Menu/>
            </div>
        </div>
    );
}

export default Header;