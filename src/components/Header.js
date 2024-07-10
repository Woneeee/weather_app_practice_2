import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

const Menu = styled.div`
  font-size: 26px;
`;

const CurrentLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Plus = styled.div`
  font-size: 26px;
`;

export const Header = ({ headerData }) => {
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <CurrentLocation>
        <h3>{headerData.name}</h3>
        <p>Sat, 19:30 pm</p>
      </CurrentLocation>

      <Plus>
        <FontAwesomeIcon icon={faPlus} />
      </Plus>
    </SHeader>
  );
};
