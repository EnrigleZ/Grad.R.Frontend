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
        label: "确诊速度",
        data: confirmlenData,
    },
    {
        label: "提前封城",
        data: dayData,
    },
    {
        label: "隔离率",
        data: isorateData
    }
];

export const DATE_HEADERS = headerData;
