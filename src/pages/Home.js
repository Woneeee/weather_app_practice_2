import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Loading } from "../components/Loading";
import { useCurrentPos } from "../lib/useCurrenPos";
import { Title } from "../components/Title";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(82, 108, 177, 1) 0%,
    rgba(223, 160, 160, 0.6251750700280112) 100%
  );
  margin: 0 auto;
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });
  // console.log(data);

  // console.log(lat, lon);

  return (
    <>
      <Title titleName="Home" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Container>
              <Header headerData={data} />

              <Section sectionData={data} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
