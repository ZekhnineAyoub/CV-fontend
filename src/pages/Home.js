import 'antd/dist/antd.css'; 
import React from "react";
import {Layout, Menu} from 'antd';
import '../index.css'
import Description from '../components/Description';
import ScrollAutomatic from '../components/ScrollAutomatic';
import Contact from '../components/Contact';

const { Header, Footer, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["3"]}>
          <Menu.Item key="1">MonCV</Menu.Item>
          <Menu.Item key="2">Détail personnels</Menu.Item>
          <Menu.Item key="3">Profil</Menu.Item>
          <Menu.Item key="4">Expérience professionnelle</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Description/>  
        <ScrollAutomatic/> 
      </Content>
      <Footer>
        <Contact/>
      </Footer>
    </Layout>
  );
};

export default Home;