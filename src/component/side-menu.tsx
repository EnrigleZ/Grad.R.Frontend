import { Menu, Layout } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const { Sider } = Layout;

function getItem(label:string, link?:string) : ItemType {
    return {
        label,
        key: label
    }
}

function SideMenu() {
    const homePageItem = getItem("首页");
    const funcOneItem = getItem("功能一");

    return (
        <Sider>
            <Menu
                onClick={console.log}
                theme="dark"
                mode="inline"
                items={[homePageItem, funcOneItem]}
            />
        </Sider>
    )
}

export default SideMenu;
