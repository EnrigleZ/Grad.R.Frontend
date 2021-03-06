import { Line } from "@ant-design/charts";
import { Card, Divider, Select, Slider } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DATE_HEADERS, EXPERIMENTS, FIXED_DATA, FIXED_LABEL } from "./constant";

const experimentSelectors = EXPERIMENTS.map(({label}) =>
    (<Select.Option key={label}>{label}</Select.Option>));

function FunctionArea() {
    const [experiment, setExperiment] = useState<string>(EXPERIMENTS[0].label);
    const [range, setRange] = useState<number[]>([]);
    const [value, setValue] = useState<number>();
    const [idx, setIdx] = useState<number>(0);
    const [data, setData] = useState<any[]>([]);

    // when switch experiment
    useEffect(() => {
        const info = EXPERIMENTS.filter(x => x.label === experiment)[0];
        const newRange = info.data.map(item => item.value);
        setRange(newRange);
        setValue(newRange[0]);
        setIdx(0);
    }, [experiment]);

    // when slide value bar
    useEffect(() => {
        if (value === undefined) {
            return;
        }
        const info = EXPERIMENTS.filter(x => x.label === experiment)[0];
        const dataOfCurrentParam = info.data
            .filter(x => x.value === value)[0].data
            .map((v, i) => ({v, date: DATE_HEADERS[i], type: `${experiment}:${value}`}));
        setData([...FIXED_DATA, ...dataOfCurrentParam]);
    }, [value]);

    return <div>
        <label className="exp-label">实验选择</label>
        <Select value={experiment} onChange={setExperiment}>{experimentSelectors}</Select>
        <Divider />
        <Line
            data={data}
            xField="date"
            yField="v"
            seriesField="type"
            color={line => {
                return line.type === FIXED_LABEL ? "#ffbb96" : "#5cdbd3";
            }}
        />
        <Divider>
            <span className="grey">参数调节</span>
        </Divider>
        <Slider
            onChange={index => {setValue(range[index]); setIdx(index)}}
            defaultValue={0}
            min={0}
            max={range.length - 1}
            tooltipVisible
            tipFormatter={value => range[value??0]}
            value={idx}
        />
    </div>
}

export default FunctionArea;
