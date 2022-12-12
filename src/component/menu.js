import {Link} from 'react-router-dom'

const Menu = ()=>{
    return(
        <menu>
            <nav>
                <ul>
                    <Link to='/About'><li>about</li></Link>
                    <Link to='/Portfolio'><li>portfolio</li></Link>
                    <Link to='/Contact'><li>contact</li></Link>
                </ul>
            </nav>
        </menu>
    )
}

export default Menu;