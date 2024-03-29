import { Row, Col, Layout, Card, Space } from "antd";
import {
  MehTwoTone,
  UserDeleteOutlined,
  DislikeOutlined,
  DingtalkOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header className="navbar--top" breakpoint="lg">
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <img
              src="logo-fav.png"
              layout="fill"
              className="rsp--width--img"
              style={{
                width: "395px",
              }}
            />
          </Col>

          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <a
                  className="color--marker--primary nav--link"
                  href="#description_section"
                >
                  CONHEÇA
                </a>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <a className="color--marker--primary nav--link" href="#contato">
                  PREÇOS
                </a>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <a className="color--marker--primary nav--link" href="#contato">
                  FALE CONOSCO
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <Row
          style={{
            height: "100vh",
            alignItems: "center",
            backgroundImage: 'url("icon-success-header.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Col span={24} className="rsp--padding--main--10">
            <Row>
              <Col span={24}>
                <h1 className="header--title">
                  <span className="header--config">
                    {" "}
                    UMA{" "}
                    <span className="color--marker--primary">
                      AGENDA SIMPLES E AUTOMATIZADA
                    </span>
                  </span>
                </h1>
                <br />
              </Col>
              <Col span={24}>
                <h2 className="header--subtitle">
                  <span className="header--config">
                    SEJA UM VENDEDOR ATIVO, MESMO TENDO{" "}
                    <span className="color--marker--primary">POUCO TEMPO</span>.
                  </span>
                </h2>
              </Col>
            </Row>
            <Row>
              <a href="#contato" className="button--action">
                Saiba mais
              </a>
            </Row>
          </Col>
        </Row>
        <Row style={{ minHeight: "50vh", alignItems: "center" }}>
          <Col span={24}>
            <h1 className="section-title" id="description_section">
              O problema
            </h1>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Card title="O CLIENTE QUE DESAPARECE" bordered={false}>
                    <p>
                      {/* <MehTwoTone style={{ fontSize: "40px", color: "#08c" }} /> */}
                      <DingtalkOutlined
                        style={{
                          fontSize: "40px",
                          color: "var(--primaryColor)",
                        }}
                      />
                    </p>
                    <p>
                      Você sabia que na maioria das empresas, se um cliente
                      deixar de comprar, ele é simplesmente esquecido?
                    </p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Card title="FALTA DE RELACIONAMENTO" bordered={false}>
                    <p>
                      <UserDeleteOutlined
                        style={{
                          fontSize: "40px",
                          color: "var(--primaryColor)",
                        }}
                      />
                    </p>
                    <p>
                      Além disso, por não ter uma presença frequente no
                      cotidiano do cliente, as empresas acabam não sendo
                      listadas como uma opção de compra.
                    </p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Card title="PORTA ABERTA PARA CONCORRÊNCIA" bordered={false}>
                    <p>
                      <DislikeOutlined
                        style={{
                          fontSize: "40px",
                          color: "var(--primaryColor)",
                        }}
                      />
                    </p>
                    <p>
                      Por fim, a falta de relacionamento abre portas para
                      entrada da concorrência.
                    </p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row
          style={{
            minHeight: "35vh",
            alignItems: "center",
            backgroundColor: "var(--primaryColor)",
            padding: `50px`,
            color: "#fff",
          }}
          className="rsp--zero--height"
        >
          <Col span={24}>
            <h1 className="section-title">A solução</h1>
            <div className="site-card-wrapper">
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  style={{ textAlign: "center" }}
                  gutter={16}
                >
                  <h3 style={{ width: "100%" }}>
                    O REFRESCA CUCA É UMA AGENDA SIMPLES E AUTOMATIZADA, QUE TE
                    AJUDARÁ A MELHORAR O RELACIONAMENTO COM SEU CLIENTE. SEM
                    BUROCRACIA, É FEITO PARA QUEM TEM O DIA AGITADO, MAS QUE
                    DESEJA ESTREITAR RELACIONAMENTO COM SEUS CLIENTES.
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
          className="rsp--zero--height"
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <h1>Contato</h1>
            <h2>QUERO SER UM VENDEDOR ATIVO</h2>
            <p>
              Fale conosco. Essa simples solução pode te colocar à frente no seu
              mercado e, principalmente, na mente do seu cliente.
            </p>
            <br />
            <a id="contato" className="button--action">
              Entrar em contato
            </a>
          </Col>
        </Row>
      </Content>
      <Footer className="footer--top" style={{ textAlign: "center" }}>
        ® Refresca Cuca - 2022
      </Footer>
    </Layout>
  );
}
