import './Menu.scss';

function Menu() {

    const menuItems = []
    return (
        <div className="menu">
            <div className={'menu_item'}>
                О нас
            </div>

            <div className={'menu_item'}>
                город
            </div>

            <div className={'menu_item'}>
                новостройки
            </div>

            <div className={'menu_item'}>
                загород
            </div>

            <div className={'menu_item'}>
                коммерция
            </div>

            <div className={'menu_item'}>
                регионы
            </div>

            <div className={'menu_item'}>
                страны
            </div>

            <div className={'menu_item'}>
                доп. услуги
            </div>

        </div>
    );
}

export default Menu;