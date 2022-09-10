import styled from "styled-components";

// interface AvatarContainerProps {
//   active: boolean;
// }

export const Container = styled.section`
  height: 60px;
  width: 248px;
  background-color: #48556a;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  margin: 0;
  border-radius: 20px;

  p {
    margin: 0;
    text-transform: uppercase;
    color: #9daec2;
    font-size: 13px;
    letter-spacing: 5px;
  }
`;

export const LinkContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ecf2f8;
  background-color: #48556a;
  /* @media (min-width: 780px) {
    position: relative;
    top: -1000px;
  } */
`;
