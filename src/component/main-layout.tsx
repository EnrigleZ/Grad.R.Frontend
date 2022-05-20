import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import PageOne from "../page/page-one/page-one";
import SideMenu from "./side-menu";

const { Header, Content } = Layout;

function MainLayout() {
    return (
        <Layout className="layout">
            <Header>
                <span className="header-text">毕业设计</span>
            </Header>
            <Layout>
                <SideMenu />
                <Content>
                    <div className="page-outer-container">
                        <div className="page-container">
                            <Routes>
                                <Route path="/" element={<PageOne />} />
                            </Routes>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
export default MainLayout;
