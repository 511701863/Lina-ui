# Lina-UI
## Lina-UI-vite-ts
<p align="center">
    <a href='https://github.com/511701863/Lina-ui/actions/workflows/main.yml'>
        <img src="https://github.com/511701863/Lina-ui/actions/workflows/main.yml/badge.svg?branch=master" alt="CI">
    </a>
</p>
## 项目目录结构

```
├── config               # 配置文件
├── coverage             # 覆盖率报告test
├── demo                 # 代码范例test
├── docs                 # 文档test
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

**提交规范**
``` flow
type：commit 的类型；
feat：新功能、新特性；
fix: 修改 bug；
perf：更改代码，以提高性能；
refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
docs：文档修改；
style：代码格式修改, 注意不是 css 修改（例如分号修改）；
test：测试用例新增、修改；
build：影响项目构建或依赖项修改；
revert：恢复上一次提交；
ci：持续集成相关文件修改；
chore：其他修改（不在上述类型中的修改）；
release：发布新版本；
workflow：工作流相关文件修改。      

# 示例1
fix(global):修复checkbox不能复选的问题
# 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
# 示例3
fix: value.length -> values.length
```
#simple-git-hooks 考虑使用这个  husky有点难搞