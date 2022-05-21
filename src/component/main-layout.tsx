import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import PageOne from "../page/page-one/page-one";
import PageTwo from "../page/page-two/page-two";
import SideMenu from "./side-menu";

const { Header, Content } = Layout;

function MainLayout() {
    return (
        <Layout className="layout">
            <Header>
                <span className="header-text">城市场景传染病传播网络推断模型</span>
            </Header>
            <Layout>
                <SideMenu />
                <Content>
                    <div className="page-outer-container">
                        <div className="page-container">
                            <Routes>
                                <Route path="/" element={<PageOne />} />
                                <Route path="/one" element={<PageOne />} />
                                <Route path="/two" element={<PageTwo />} />
                            </Routes>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
export default MainLayout;
