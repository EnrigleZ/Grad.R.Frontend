import headerData from '../../static/page-2/header.json';
import trafficData from '../../static/page-2/traffic.json';
import isorateData from '../../static/page-2/isorate.json';
import confirmlenData from '../../static/page-2/confirmlen.json';
import dayData from '../../static/page-2/day.json';

export const EXPERIMENTS = [
    {
        label: "交通强度",
        data: trafficData
    },
    {
        label: "确诊时长",
        data: confirmlenData,
    },
    {
        label: "封城日期",
        data: dayData,
    },
    {
        label: "隔离率",
        data: isorateData
    }
];

export const DATE_HEADERS = headerData;

export const FIXED_LABEL = "参考变化曲线";
export const FIXED_DATA = dayData.filter(x => x.value === 0.0)[0]
    .data.map((v, i) => ({v, date: DATE_HEADERS[i], type: FIXED_LABEL }));
