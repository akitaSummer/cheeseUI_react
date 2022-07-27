# 开始使用
请先[安装](#/doc/install)本组件库。

请现在入口文件中引入css

```
import 'cheese-ui-vue/dist/lib/cheese.css'
```

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "cheese-ui-vue"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "cheese-ui-vue"
export default {
  components: {Button}
}
</script>
```
