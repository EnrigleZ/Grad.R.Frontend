import React from 'react';
import { Line } from '@ant-design/charts';

import dateHeader from '../../static/page-1/date.json';
import streetInfo from '../../static/page-1/street-info.json';
import realData from '../../static/page-1/real.json';
import seoiPredicted from '../../static/page-1/seoi-predicted.json';
import { Divider, Form, Select } from 'antd';

const DATE_FIELD = "date";
const VALUE_FIELD = "value";
const STREET_FIELD = "street";

const SEOI_MODEL = "SEOI";

const MODEL_DATA_MAP: any = {
    [SEOI_MODEL]: seoiPredicted,
}

function generateChartData(row: number[], street: string) {
    return row.map((x, i) => ({
        [DATE_FIELD]: dateHeader[i],
        [VALUE_FIELD]: row[i],
        [STREET_FIELD]: street
    }))
}

const REAL_DATA_CHART_DATA = generateChartData(realData[0], "真实数据");

const STREET_SELECTORS = streetInfo.map(item =>
    (<Select.Option key={item.id}>{item.name}</Select.Option>));

const MODEL_SELECTORS = [SEOI_MODEL].map(item =>
    (<Select.Option key={item}>{item}</Select.Option>));

function FunctionArea() {
    // const predicted = generateChartData(seoiPredicted[0], "SEOI预测结果");

    const [data, setData] = React.useState([...REAL_DATA_CHART_DATA]);

    const [streetIndex, setStreetIndex] = React.useState<number>(0);
    const [model, setModel] = React.useState<string>("");
    const [predict, setPredict] = React.useState<number[][]>([]);       // 2-d matrix

    const onStreetIndexChange = React.useCallback((index: number) => {
        setStreetIndex(index);
    }, []);


    const onModelChange = React.useCallback((name: string) => {
        setModel(name);
        setPredict(MODEL_DATA_MAP[name]);
    }, []);

    React.useEffect(() => {
        if (streetIndex < predict.length) {
            const predictedData = generateChartData(predict[streetIndex], `${model}预测结果`);
            const realStreetData = generateChartData(realData[streetIndex], "真实数据");

            setData([...realStreetData, ...predictedData])
        }
    }, [streetIndex, model, predict]);

    return (<div>
        <Line
            data={data}
            xField={DATE_FIELD}
            yField={VALUE_FIELD}
            seriesField={STREET_FIELD}
            animation={{
                appear: {
                    animation: 'path-in',
                    duration: 1000,
                },
            }}
        />
        <Divider className='page-1-divider' />
        <Form>
            <Form.Item label="模型选择">
                <Select onChange={onModelChange} placement="bottomLeft">
                    {MODEL_SELECTORS}
                </Select>
            </Form.Item>
            <Form.Item label="区域选择">
                <Select onChange={onStreetIndexChange} placement="bottomLeft">
                    {STREET_SELECTORS}
                </Select>
            </Form.Item>
        </Form>
    </div>)
}

export default FunctionArea;