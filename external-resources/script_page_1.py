import json

def read_SEOI_results_from_csv(filename):
    header = None
    data = []
    total = []
    with open(filename, encoding="utf-8") as file:
        for line in file:
            items = line.strip().split(',')[:-1] # remove last ID column
            if header is None:
                header = items
                total = [0 for _ in header]
                continue
            items = [float(x) for x in items]
            assert len(items) == len(header)
            data.append(items)

            total = [total[i] + items[i] for i in range(len(items))]

    assert header[0] == "2019-12-02"
    assert header[-1] == "2020-03-12"

    data.insert(0, total)
    return header, data

def read_wuhan_data_from_csv(filename):
    header = None
    data = []
    streets = []
    pops = []
    total = []
    with open(filename, encoding="utf-8") as file:
        for line in file:
            items = line.strip().split(',')
            if header is None:
                header = items[3:]
                total = [0 for _ in header]
                continue
            streets.append(items[1])
            pops.append(int(items[2]))

            items = [int(x) for x in items[3:]]
            for i in range(len(items) - 1, 0, -1):
                items[i] -= items[i - 1]

            assert len(items) == len(header)
            data.append(items)

            for i in range(len(items)):
                total[i] += items[i]

    assert header[0] == "2019/12/2"
    assert streets[0] == "宝丰街道"
    assert pops[0] == 56647

    streets.insert(0, "武汉市")
    pops.insert(0, sum(pops))
    data.insert(0, total)
    return header, data, streets, pops

PREDICTED_RESULT_FILE_NAME = "external-resources\page-1\SEOI.csv"
PREDICTED_RESULT_TSG_FILE_NAME = "external-resources\page-1\SEOI-TSG.csv"
PREDICTED_RESULT_G_FILE_NAME = "external-resources\page-1\SEOI-G.csv"
PREDICTED_RESULT_S_FILE_NAME = "external-resources\page-1\SEOI-S.csv"
PREDICTED_RESULT_T_FILE_NAME = "external-resources\page-1\SEOI-T.csv"

REAL_DATA_FILE_NAME = "external-resources\page-1\wuhan_onset_fin_full.csv"

PAGE_1_SEOI_PREDICTED_OUTPUT_FILE_NAME = r"src\static\page-1\seoi-predicted.json"
PAGE_1_SEOI_T_PREDICTED_OUTPUT_FILE_NAME = r"src\static\page-1\seoi-t-predicted.json"
PAGE_1_SEOI_S_PREDICTED_OUTPUT_FILE_NAME = r"src\static\page-1\seoi-s-predicted.json"
PAGE_1_SEOI_G_PREDICTED_OUTPUT_FILE_NAME = r"src\static\page-1\seoi-g-predicted.json"
PAGE_1_SEOI_TSG_PREDICTED_OUTPUT_FILE_NAME = r"src\static\page-1\seoi-tsg-predicted.json"

PAGE_1_REAL_OUTPUT_FILE_NAME = r"src\static\page-1\real.json"
PAGE_1_STREET_INFO_FILE_NAME = r"src\static\page-1\street-info.json"
PAGE_1_DATE_FILE_NAME = r"src\static\page-1\date.json"

def page_1_main():
    _, seoi_predicted_data = read_SEOI_results_from_csv(PREDICTED_RESULT_FILE_NAME)
    _, seoi_t_predicted_data = read_SEOI_results_from_csv(PREDICTED_RESULT_T_FILE_NAME)
    _, seoi_s_predicted_data = read_SEOI_results_from_csv(PREDICTED_RESULT_S_FILE_NAME)
    _, seoi_g_predicted_data = read_SEOI_results_from_csv(PREDICTED_RESULT_G_FILE_NAME)
    _, seoi_tsg_predicted_data = read_SEOI_results_from_csv(PREDICTED_RESULT_TSG_FILE_NAME)
    header, real_data, streets, pops = read_wuhan_data_from_csv(REAL_DATA_FILE_NAME)

    assert len(seoi_predicted_data) == len(seoi_t_predicted_data) \
        == len(seoi_s_predicted_data) == len(seoi_g_predicted_data) \
        == len(seoi_tsg_predicted_data) == len(real_data)

    json.dump(seoi_predicted_data,
              open(PAGE_1_SEOI_PREDICTED_OUTPUT_FILE_NAME, "w", encoding="utf-8"))
    json.dump(seoi_t_predicted_data,
              open(PAGE_1_SEOI_T_PREDICTED_OUTPUT_FILE_NAME, "w", encoding="utf-8"))
    json.dump(seoi_s_predicted_data,
              open(PAGE_1_SEOI_S_PREDICTED_OUTPUT_FILE_NAME, "w", encoding="utf-8"))
    json.dump(seoi_g_predicted_data,
              open(PAGE_1_SEOI_G_PREDICTED_OUTPUT_FILE_NAME, "w", encoding="utf-8"))
    json.dump(seoi_tsg_predicted_data,
              open(PAGE_1_SEOI_TSG_PREDICTED_OUTPUT_FILE_NAME, "w", encoding="utf-8"))

    json.dump(real_data,
              open(PAGE_1_REAL_OUTPUT_FILE_NAME, "w", encoding="utf-8"))

    json.dump(header,
              open(PAGE_1_DATE_FILE_NAME, "w", encoding="utf-8"))

    street_data = []
    for i, (street, pop) in enumerate(zip(streets, pops)):
        street_data.append({
            "id": i,
            "population": pop,
            "name": street
        })

    json.dump(street_data,
              open(PAGE_1_STREET_INFO_FILE_NAME, "w", encoding="utf-8"),
              ensure_ascii=False,
              indent=4)


page_1_main()

