import logo from '../../assets/logo1.png';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UsuarioContext } from '../../common/Usuario';
import { useState } from 'react';
import { useEffect } from 'react';
import { BotaoEntrar, Container, ContainerLogin, Input, InputLogin, Logo, PagLogin, TituloLogin } from './style';
import { BsPlay } from 'react-icons/bs';

const Login = () => {
    const navigates = useNavigate();
    const { nome, setNome, senha, setSenha } = useContext(UsuarioContext);
    const [disabledButton, setDisabledButton] = useState(false);

    useEffect(() => {
        if (!nome || !senha) {
            return setDisabledButton(true);

        }
        setDisabledButton(false);
    }, [senha, nome])


    return (
        <Container>
            <Logo src={logo} />
            <PagLogin>
                <ContainerLogin>
                    <TituloLogin >Entrar</TituloLogin>
                    <Input>
                        <InputLogin
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            placeholder="Nome do usuário"
                        />
                        <InputLogin
                            type='password'
                            placeholder="Senha"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                        <BotaoEntrar
                            className="BotaoEntrar"
                            disabled={disabledButton}
                            onClick={() => navigates('/inicio')}
                        >
                            Entrar
                        </BotaoEntrar>
                    </Input>
                </ContainerLogin>
            </PagLogin>
        </Container>
    )
}

export default Login;
