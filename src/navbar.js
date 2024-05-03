import { useState } from "react";
import styled from 'styled-components';
import baam from './baam.jpeg';

const Nav = styled.div`
    padding: 0 20px;
    min-height: 9vh;
    background: #264257;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div``;
const Img = styled.img`
    width: 125px;
    height: 50px;
    border-radius : 50%;
`;
const Menu = styled.ul`
    list-style: none;
    display: flex;
    
    @media (max-width: 768px) {
        display: none;
    }
`;
const Item = styled.li`
    margin: 0px 20px;
`;
const Link = styled.a`
    color: #c5bd52;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;
const NavIcon = styled.button`
    background :none;
    cursor: pointer;
    border: none;
    outline: none;

    @media (min-width: 769px) {
        display: none;
    }
`;
const Line = styled.span`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #c5bd52;
    transition: width 0.4s ease-in-out;

    :nth-child(2) {
        width: ${props => (props.open ? "40%" : "70%")};
    }
`;
const Overlay = styled.div`
    position: absolute;
    height: ${props => (props.open ? "91vh" : 0)};
    width: 100vw;
    background: #264257;
    transition: height 0.4s ease-in-out;

    @media (min-width: 769px) {
        display: none;
    }
`;
const Overlaymenu = styled.ul`
    list-style: none;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    li {
        opacity: ${props => (props.open ? 1 : 0)};
        font-size: 25px;
        margin: 50px 0px;
        transition: opacity 0.4s ease-out;
    }

`;
const Navbar = () => {
    const [toggle, toggleNav] = useState(false);
    return(
        <>
            <Nav>
                <Logo>
                    <Img src={baam}></Img>
                </Logo>
                <Menu>
                    <Item>
                        <Link target="#" href="https://leetcode.com/kaepjjang/">
                            Leetcode
                        </Link>
                    </Item>
                    <Item>
                        <Link target="#" href="https://www.instagram.com/aishwaryeay/">
                            Instagram
                        </Link>
                    </Item>
                    <Item>
                        <Link target="#" href="https://www.linkedin.com/in/aishwarya-thorat-7328601a6/">
                            Linkedin
                        </Link>
                    </Item>
                    <Item>
                        <Link target="#" href="https://www.youtube.com/watch?v=FPH5PfNwM1A">
                            Youtube
                        </Link>
                    </Item>                    
                </Menu>
                <NavIcon onClick={() => toggleNav(!toggle)}>
                    <Line open={toggle} />
                    <Line open={toggle} />
                    <Line open={toggle} />
                </NavIcon>
            </Nav>
            <Overlay open={toggle}>
                <Overlaymenu open={toggle}>
                    <Item>
                            <Link target="#" href="https://www.instagram.com/aishwaryeay/">
                                Instagram
                            </Link>
                        </Item>
                        <Item>
                            <Link target="#" href="">
                                Linkedin
                            </Link>
                        </Item>
                        <Item>
                            <Link target="#" href="https://www.youtube.com/watch?v=FPH5PfNwM1A">
                                Youtube
                            </Link>
                        </Item>
                        <Item>
                            <Link target="#" href="https://leetcode.com/kaepjjang/">
                                Leetcode
                            </Link>
                        </Item>
                </Overlaymenu>
            </Overlay>
        </>
    )
}

export default Navbar;