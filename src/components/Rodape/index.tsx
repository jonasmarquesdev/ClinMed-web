/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListaEstilizado = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
  gap: 0.7em;
`;

const ItemEstilizado = styled.li`
  list-style-type: none;
`;

function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </ItemEstilizado>
      </ListaEstilizado>
      <p>
        2023 © Desenvolvido por jonasmarquesdev | Projeto fictício sem fins comerciais.
      </p>
    </RodapeEstilizado>
  );
}

export default Rodape;
