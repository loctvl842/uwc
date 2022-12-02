import styled from "styled-components";

export const Container = styled.div`
        position: fixed;
        height: 60px;
        width: 60px;
        display: flex;
        background-color: #558e4c;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        bottom: 24px;
        right: 24px;
        z-index: 1002;
        cursor: pointer;
        svg {
            
          font-size: 30px;
          color: white;
          transition: all 0.5s ease-in-out;
          position: relative;
          z-index: 1;
          bottom: -1px;
        }
        &:hover {
          svg {
            transform: scale(0.9);
            color: black;
          }
          &:after {
            transform: scale(1);
            background-color: #ecdd5e;
            opacity: 1;
          }
        }
        &:after {
          transition: all 0.35s ease-in-out;
          border-radius: 50%;
          content: "";
          position: absolute;
          transform-origin: center;
          inset: 0;
          transform: scale(0);
          opacity: 0;
        }
      
    
`
