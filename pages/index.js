import { MehTwoTone } from "@ant-design/icons";
import { Row, Col, Layout, Card, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

import Link from "next/link";

const content = {
  marginLeft: "5em",
  marginRight: "5em",
  marginTop: "5em",
};

export default function Home() {
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={6}>Logo</Col>
          <Col span={18}>
            <Row>
              <Col span={12}></Col>
              <Col span={4}>
                <a href="#description_section">CONHEÇA</a>
              </Col>
              <Col span={4}>
                <a href="#contato">PREÇOS</a>
              </Col>
              <Col span={4}>
                <a href="#contato">FALE CONOSCO</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingLeft: 50, paddingRight: 50 }}>
        <Row style={{ height: "100vh", alignItems: "center" }}>
          <Col span={24}>
            <h1 className="header--title">UMA AGENDA SIMPLES E AUTOMATIZADA</h1>
            <h2 className="header--subtitle">SEJA UM VENDEDOR ATIVO</h2>
            <a href="#contato">Saiba mais</a>
          </Col>
        </Row>
        <Row style={{ height: "50vh", alignItems: "center" }}>
          <Col span={24}>
            <h1 className="section-title" id="description_section">
              O problema
            </h1>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Rotatividade de clientes" bordered={false}>
                    <p>
                      <MehTwoTone style={{ fontSize: "40px", color: "#08c" }} />
                    </p>
                    <p>
                      CLIENTES DEIXAm DE COMPRAR, E NÃO PERCEBEMOS, JÁ QUE ISSO
                      FICA "CAMUFLADO" EM MEIO A UMA GRANDE CARTEIRA DE
                      CLIENTES.
                    </p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    title="Pouca proatividade no pós venda"
                    bordered={false}
                  >
                    <p>
                      <MehTwoTone style={{ fontSize: "40px", color: "#08c" }} />
                    </p>
                    <p>
                      CONCORRENTES ENCONTRAM PORTAS DE ENTRADA, JÁ QUE NÃO
                      Conseguimos MANTER UM RELACIONAMENTO RECORRENTE COM O
                      CLIENTE.
                    </p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Um outro problema" bordered={false}>
                    <p>
                      <MehTwoTone style={{ fontSize: "40px", color: "#08c" }} />
                    </p>
                    <p>
                      CONCORRENTES ENCONTRAM PORTAS DE ENTRADA, JÁ QUE NÃO
                      Conseguimos MANTER UM RELACIONAMENTO RECORRENTE COM O
                      CLIENTE.
                    </p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "25vh", alignItems: "center" }}>
          <Col span={24}>
            <h1 className="section-title">A solução</h1>
            <div className="site-card-wrapper">
              <Row>
                <Col span={24} style={{ textAlign: "center" }} gutter={16}>
                  <h3 style={{ width: "100%" }}>
                    AUTOMATIZAMOS O AGENDAMENTO DE CONTATOS, DE MANEIRA SIMPLES
                    E DESCOMPLICADA. FEITO PARA VOCÊ QUE TEM POUCO TEMPO
                    DISPONÍVEL.
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            height: "50vh",
            alignItems: "center",
          }}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <h1>Contato</h1>
            <h2>SEJA UM VENDEDOR ATIVO</h2>
            <p>Quero automatizar meu pós venda</p>
            <a id="contato">Entrar em contato</a>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>® Refresca Cuca - 2022</Footer>
    </Layout>
  );
}
