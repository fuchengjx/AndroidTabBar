这是一个基于**react Native**开发的 **安卓 TabNavigatorItem**

#### rn踩坑经历

1. 最外层必须要有一个View组件包裹

2. APP组件里 最外层的VIew里必须有一个style， 否则TabNavigatorItem 不会出现在底部。

   style ` contaniner: {

   ​    flex: 1

     },`

3. import 引入组件 组件名必须为大写 否则使用自定义组件的时候无法使用

