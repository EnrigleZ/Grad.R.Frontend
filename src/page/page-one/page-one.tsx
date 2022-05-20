import { Card, Col, Row } from "antd";
import FunctionArea from "./function-area";

function PageOne() {
    return (<Row className="page-1">
        <Col span={15}>
            <Card title="标题标题标题标题标题标题标题标题标题">
                <FunctionArea />
            </Card>
        </Col>
        <Col span={7} offset={2} className="right-content">
            这个地方可以准备一段总结性的文本
            <br/><br/>
            把展示效果不好的街道挑一下，我从前端下拉框里删了
        </Col>
    </Row>);
}

export default PageOne;