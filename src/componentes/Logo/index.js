import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoImag= styled.img`
    margin-right: 10px;
`
const LogoContainer=styled.div`
  display: flex;
  font-size: 30px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImag src={logo} alt='logo' ></LogoImag>
            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo