import './Menu.scss';

function Menu() {

    const handleClick = (e) => {

        const burgerIcon = e.target;
        const menuItems = burgerIcon.parentNode.querySelector('.menu__items');

        menuItems.classList.add('menu__open');
    }

    return (
        <div className="menu">
            <div className={'menu__burger-icon'}
                 onClick={handleClick}
            >
                menu
            </div>
            <div className={'menu__items'}>
                <div className={'menu__item'}>
                    О нас
                </div>

                <div className={'menu__item'}>
                    город
                </div>

                <div className={'menu__item'}>
                    новостройки
                </div>

                <div className={'menu__item'}>
                    загород
                </div>

                <div className={'menu__item'}>
                    коммерция
                </div>

                <div className={'menu__item'}>
                    регионы
                </div>

                <div className={'menu__item'}>
                    страны
                </div>

                <div className={'menu__item'}>
                    доп. услуги
                </div>
            </div>
        </div>
    );
}

export default Menu;