### flex基础知识

```css
div{
    flex-flow: row nowrap;
    justify-content: flex-start;
    aligin-items: stretch;
    order: 0; //值越大越在后面
    flex-grow: 0;/*假设abcd四个方块,默认左边多了一篇空白,a设置为1,b设置为2,那么多出的空间,按照1:2分配给a和b*/
    flex: 0 1 auto; /*flexgrow flex-shrink flex-basis, 后面两个参数是可选的,在默认情况下有多余空间,元素不扩大;空间不足,元素缩小,因为都是1,所以等比例缩小*/
    flex: 0 1 300px; /*前提是每个方块都是这个参数,当有剩余空间的时候,不放大,没有剩余宽度就会缩小(如果nowrap的话)300px这个时候就表示最大宽度*/
    flex: 1 0 300px; /*这个就表示最小宽度了,有剩余空间会放大,没有剩余空间不会缩小*/
    align-self: auto/*flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self*/
}
```

1. 剩余空间就是父容器在主轴的方向上还有多少可用的空间。
2. align-self 属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式。
