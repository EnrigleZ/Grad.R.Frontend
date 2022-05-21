# README

## 运行

```bash
yarn --frozen-lockfile

yarn start
```

## 更新数据

- 把更新后的csv文件放入 `external-resource\page-*` 子目录中
- 运行命令

```bash
# * 此时处于项目根目录

python .\external-resources\script_page_1.py
# 或者
python .\external-resources\script_page_2.py
```

- 在Git中检查 `src\static\page-*` 中对应的json文件是否更新
