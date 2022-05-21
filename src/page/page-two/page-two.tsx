import { Card, Col, Row } from "antd";
import FunctionArea from "./function-area";

function PageTwo() {
    return (<Row className="page-1">
        <Col span={15}>
            <Card title="累计感染人数变化图">
                <FunctionArea />
            </Card>
        </Col>
        <Col span={7} offset={2} className="right-content">
            本部分实验是基于SEOI-TSG推断模型，从城市内部交通强度管控、
            封城开始时间、有效隔离率和确诊速度四个方面来对防控措施进行模拟实验。
        </Col>
    </Row>);
}

export default PageTwo;
