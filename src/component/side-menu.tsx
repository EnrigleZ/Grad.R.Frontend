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
    const funcOneItem = getItem("功能一");

    return (
        <Sider>
            <Menu
                theme="dark"
                mode="inline"
                items={[funcOneItem]}
            />
        </Sider>
    )
}

export default SideMenu;
