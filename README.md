# Lina-UI

## 项目目录结构

```
├── config               # 配置文件
├── coverage             # 覆盖率报告
├── demo                 # 代码范例
├── docs                 # 文档
├── node_modules  
├── scripts              # 脚本 发布、提交信息检查
├── src                  # 组件代码
└── types                # TS类型定义
```

**文件命名规范**
``` flow
├── src                  # 组件代码
    └── button           # 组件包名
         ├── index.ts    # 组件入口
         ├── Button.tsx  # 组件代码  
         └── __tests__   # 测试用例
                  └── Button.spec.ts 
· 包名：小写 + 中划线；
· 统一入口文件： index.ts；
· 组件代码： 大驼峰；
· 测试用例代码 ： 测试对象名+ .spec.ts。                  
```