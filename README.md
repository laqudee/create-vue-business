# Create Vue Business

> 仿照`create-vue`写了一个生成一个 pnpm monorepo 的工作仓内部`packages`目录下业务项目的 CLI

- [参考：`create-vue`](https://github.com/vuejs/create-vue#readme)

- [参考：`create-vue-monorepo`](https://github.com/laqudee/create-vue-monorepo)

- 注意：该 CLI 只适合在使用`create-vue-monorepo`CLI 命令生成的项目中使用

## 使用

```shell
# 全局安装
pnpm add create-vue-business --global
```

```shell
# 在要新建业务项目的packages目录下
create-vue-business
```

![演示before](https://github.com/laqudee/create-vue-business/blob/main/media/before-business.png)

![演示after](https://github.com/laqudee/create-vue-business/blob/main/media/after-business.png)

## 构建

- 渲染核心代码 template
- 渲染配置文件
  - web（默认使用 Element-plus）
  - h5（默认使用 Vant）
- 渲染 package.json

## 选项

- web（默认使用 Element-plus）
- h5（默认使用 Vant）
