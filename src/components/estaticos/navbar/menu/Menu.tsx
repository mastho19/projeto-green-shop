import FormControl from '@mui/material/FormControl'
import './Menu.css'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

function MenuBarrinha() {
    return (
        <>
            <nav className='menu'>

                <input type="checkbox" className="menu-faketrigger" />
                <div className="menu-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <ul>

                    <li className="pesquisa2">
                        <FormControl variant="standard" color='success' >
                            <Input placeholder="Buscar Produtos" startAdornment={<InputAdornment position="start"><SearchIcon className="lupa2" /></InputAdornment>} />
                        </FormControl>
                    </li>

                    <li><b><Link to='/home'>HOME</Link></b></li>
                    <li><b><Link to='/produtos/all'>PRODUTOS</Link></b></li>
                    <li><b><Link to='/sobre-nos'>SOBRE NÓS</Link></b></li>

                </ul>

            </nav>
        </>
    )
}
export default MenuBarrinha