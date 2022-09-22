import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2, BiBell, BiUserCircle, BiLogOut } from 'react-icons/bi'
import { useContext, useState } from 'react';
import logo from '../../assets/logo1.png';
import { BarraDeBusca, ModalOpen, StylesNavbar, CustomStyles } from './style';
import { Logo3035 } from '../../assets/UI';
import { UsuarioContext } from '../../common/Usuario';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const { nome, setSenha, setNome } = useContext(UsuarioContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch('');
    }

    function limpar() {
        setNome('');
        setSenha('');
        navigate('/');
    }

    function handleOpenModal() {
        setModalIsOpen((event) => !event);
    }

    return (
        <StylesNavbar>
            <ul >
                <Logo3035 src={logo} alt="logo 3035" className='logoDa3035' />
                <li>
                    <Link to='/inicio'>Início</Link>
                </li>
                <li>
                    <Link to='/inicio'>Filmes</Link>
                </li>
                <li>
                    <Link to='/inicio'>Séries</Link>
                </li>
            </ul>
            <BarraDeBusca>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Busque um filme'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    ></input>
                    <button type='submit'>
                        <BiSearchAlt2 />
                    </button>
                </form>
                <button>
                    <BiBell />
                </button>
                <button onClick={handleOpenModal}>
                    <BiUserCircle />
                </button>
                {modalIsOpen && (<CustomStyles
                >
                    < ModalOpen>
                        <h3>{nome}</h3>
                        <button onClick={limpar}>
                            <BiLogOut />
                        </button>
                    </ ModalOpen>
                </CustomStyles>)}
            </BarraDeBusca >
        </StylesNavbar>
    )
}

export default Navbar;
