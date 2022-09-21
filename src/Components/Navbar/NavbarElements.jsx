import styled from "styled-components";


export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    justify-conent: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    max-width: 1300px;
    margin: 0 auto 0 auto;
    padding: 0 50px 050px;

    @media screen and (max-width: 991px) {
        padding-right: 50px;
        padding-left: 50px;
    }

    @media screen and (max-width: 460px) {
        padding-right: 15px;
        padding-left: 15px;
    }
`
export const WeatherStat = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

export const WeatherItems = styled.li`
    height: 80px;
`
