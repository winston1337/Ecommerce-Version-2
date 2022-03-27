import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 60px;
    background: radial-gradient(circle, rgb(227, 3, 235) 0%, rgb(15, 14, 15) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: -165%;
    overflow: hidden;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Link = styled.a`
    color: #fff;
    padding: 5px;
    font-size: 18px;
    text-decoration: none;
    // padding-right: 2em;
    // padding-left: 1em;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
        // cursor: pointer;
    }
`

export const Title = styled.p`
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`
