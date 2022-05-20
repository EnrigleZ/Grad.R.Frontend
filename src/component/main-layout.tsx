import { Layout, Menu } from "antd";
import SideMenu from "./side-menu";

const { Sider, Header, Footer, Content } = Layout;

function MainLayout() {
    return (
        <Layout className="layout">
            <Header>Header</Header>
            <Layout>
                <SideMenu />
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
}
export default MainLayout;
