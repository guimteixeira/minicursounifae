import { React, useState } from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard";
import { Container } from "@mui/material";
import Vendas from "./vendas/Vendas";
import Produtos from "./produtos/Produtos";
import Vendedores from "./Vendedores/Vendedores";
import MenuTemporario from "./components/MenuTemporaio";

function App() {

  const [estadoMenu, setEstadoMenu] = useState(false);

  function fechaMenu() {
    setEstadoMenu(false);
  }

  function abreMenu() {
    setEstadoMenu(true);
  }

  return (
    <>
      <Menu abrirMenu={abreMenu} />
      <MenuTemporario estadoMenu={estadoMenu} fecharMenu={fechaMenu} />
      <Container maxWidth="lg">
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/vendedores" element={<Vendedores />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
