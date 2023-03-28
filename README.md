# Create Vue Business

> 仿照`create-vue`写了一个生成一个pnpm monorepo 的工作仓内部`packages`目录下业务项目的CLI

- [参考：`create-vue`](https://github.com/vuejs/create-vue#readme)

- [参考：`create-vue-monorepo`](https://github.com/laqudee/create-vue-monorepo)

- 注意：该CLI只适合在使用`create-vue-monorepo`CLI命令生成的项目中使用

## 使用

```shell
# 全局安装
pnpm add create-vue-business --global
```

```shell
# 在要新建业务项目的packages目录下
create-vue-business
```

## 构建
- 渲染核心代码template
- 渲染配置文件
  - web（默认使用Element-plus）
  - h5（默认使用Vant）
- 渲染package.json


## 选项

- web（默认使用Element-plus）
- h5（默认使用Vant）
