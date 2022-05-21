import json
from re import L

def read_csv(filename):
    with open(filename, encoding='utf-8') as file:
        header = file.readline().strip().split(',')[1:]
        data = file.readline().strip().split(',')[1:]
        data = [int(float(x)) for x in data]

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
    parse_loop(TRAFFIC_SUFFIX, ["%.02f"%(x / 100) for x in range(20, 81)], TRAFFIC_OUTPUT)
    parse_loop(ISORATE_SUFFIX, ["%.02f"%(x / 100) for x in range(50, 99)], ISORATE_OUTPUT)
    parse_loop(CONFIRMLEN_SUFFIX, ["%.02f"%(x / 100) for x in range(70, 131)], CONFIRMLEN_OUTPUT)
    parse_loop(DAY_SUFFIX, [str(x) for x in range(-21, 22)], DAY_OUTPUT)

page_2_main()
