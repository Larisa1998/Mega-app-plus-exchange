/* eslint-disable react/style-prop-object */
import './Menu.css';
import logo from '../../assets/img/logo.png'
import Button from '../FloatingForm/Button/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user';

const Menu = ({users}) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser())
    }
    const menuRoutes = [
        {
            title: 'Countries',
            path: '/countries'
        },
        {
            title: 'Exchange',
            path: '/exchange'
        }
    ]

    return (
        <menu className='navigation d-flex flex-column  align-items-center'>
            <a href='/'><img src={logo} alt=''></img></a>
            <p className='text-32'>Welcome {users[0].username}</p>
            <Button text={'Log out'} style={'danger'} onClick={logout} />
            <ul>
                {menuRoutes.map((route, index) => (
                    <li className='my-3' key={index}><a href={route.path}>{route.title}</a></li>
                ))}
            </ul>
        </menu>
    )
}

export default Menu;