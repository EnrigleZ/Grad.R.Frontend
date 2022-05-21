import { Menu, Layout } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function getItem(label:string, link?:string) : ItemType {
    return {
        label: (<Link to={link??"/"}>{label}</Link>),
        key: label
    }
}

function SideMenu() {
    const funcOneItem = getItem("传染病传播网络预测实验", "one");
    const funcTwoItem = getItem("疫情防控措施模拟实验", "two");

    return (
        <Sider>
            <Menu
                theme="dark"
                mode="inline"
                items={[funcOneItem, funcTwoItem]}
            />
        </Sider>
    )
}

export default SideMenu;
