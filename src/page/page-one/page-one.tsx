import { Card, Col, Row } from "antd";
import FunctionArea from "./function-area";

function PageOne() {
    return (<Row className="page-1">
        <Col span={15}>
            <Card title="日新增感染人数变化图">
                <FunctionArea />
            </Card>
        </Col>
        <Col span={7} offset={2} className="right-content">
            本部分实验的目的是使用结合了时空环境数据的多种群传染病传播网络推断模型
            对2020年初的武汉市新冠疫情发展进行拟合与预测，预测的内容包括武汉市的
            总体疫情预测与每个街道办子区域的疫情预测。
        </Col>
    </Row>);
}

export default PageOne;