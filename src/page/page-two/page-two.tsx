import { Card, Col, Row } from "antd";
import FunctionArea from "./function-area";

function PageTwo() {
    return (<Row className="page-1">
        <Col span={15}>
            <Card title="标题标题标题标题标题标题标题标题标题">
                <FunctionArea />
            </Card>
        </Col>
        <Col span={7} offset={2} className="right-content">
            这个地方可以准备一段总结性的文本
            <br/><br/>
            给功能一、功能二页面分别起个名字
        </Col>
    </Row>);
}

export default PageTwo;
