import json
from re import L

def read_csv(filename):
    with open(filename, encoding='utf-8') as file:
        header = file.readline().strip().split(',')[1:]
        data = file.readline().strip().split(',')[1:]
        data = [float(x) for x in data]

    assert len(header) == len(data)
    return header, data

DIR = "external-resources/page-2/"

TRAFFIC_SUFFIX = "traffic_wuhan_result.csv"
ISORATE_SUFFIX = "isorate_wuhan_result.csv"
CONFIRMLEN_SUFFIX = "confirmlen_wuhan_result.csv"
DAY_SUFFIX = "day_wuhan_result.csv"

TRAFFIC_OUTPUT = r"src\static\page-2\traffic.json"
ISORATE_OUTPUT = r"src\static\page-2\isorate.json"
CONFIRMLEN_OUTPUT = r"src\static\page-2\confirmlen.json"
DAY_OUTPUT = r"src\static\page-2\day.json"
HEADER_OUTPUT = r"src\static\page-2\header.json"

def parse_loop(suffix, values, output_filename):
    output = []

    for value in values:
        header, data = read_csv(DIR + value + suffix)
        output.append({"value":float(value), "data": data})

    json.dump(output, open(output_filename, "w"))
    json.dump(header, open(HEADER_OUTPUT, "w"))

def page_2_main():
    parse_loop(TRAFFIC_SUFFIX, ["0.20", "0.22", "0.32"], TRAFFIC_OUTPUT)
    parse_loop(ISORATE_SUFFIX, ["0.50", "0.56", "0.69"], ISORATE_OUTPUT)
    parse_loop(CONFIRMLEN_SUFFIX, ["0.70", "1.00", "1.29"], CONFIRMLEN_OUTPUT)
    parse_loop(DAY_SUFFIX, ["0", "1", "7"], DAY_OUTPUT)

page_2_main()
