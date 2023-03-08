import styled from 'styled-components'
import { AiOutlineLinkedin, AiFillMediumSquare, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { BsFillCaretUpFill } from 'react-icons/bs'

export const ContactBarContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin-right: 1.5vw;
    @media screen and (max-width: 1015px) {
        display: none;
    }
`

export const IconsContainer = styled.div`
    width: 3vw;
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
`

export const IconContainer = styled.div`
    text-align: center;
    padding-bottom: 1vh;
`

export const LinkedInIcon = styled(AiOutlineLinkedin)`
    text-decoration: none;
    color: black;
    &:hover {
        color: blue;
        cursor: pointer;
    }
`

export const GitHubIcon = styled(AiFillGithub)`
    text-decoration: none;
    color: black;
    &:hover {
        color: orange;
        cursor: pointer;
    }
`

export const ContactBarArrowContainer = styled.div`
    width: 3vw;
    background-color: rgba(21, 205, 252, 1);
    text-align: center;
    &:hover {
        background-color: blue;
        cursor: pointer;
    }
`

export const ContactBarArrowIcon = styled(BsFillCaretUpFill)`
    color: white;
    font-weight: bold;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
`