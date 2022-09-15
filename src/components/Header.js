import React from 'react'
import './Header.css'
import { CgPoll } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    
    const handleUserClick = () => {
        navigate('/home',{replace:true})
    }

    const handlePollResultClick = () => {
        navigate('/pollResult',{replace:true})
    }

    const handleLogoutClick = () => {
        navigate('/',{replace:true})
    }

    return (
        <div className='header-container'>
            <div className='header-icon'>
                <CgPoll fontSize="30px" />
            </div>
            <div className='header-menu'>
                <span onClick={ (event) => {handleUserClick(event)}}>User Poll</span>
                <span onClick={ (event) => {handlePollResultClick(event)}}>Poll result</span>
                <span onClick={ (event) => {handleLogoutClick(event)}}>LogOut</span>
            </div>
        </div>
    )
}

export default Header