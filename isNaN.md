isNaN和Number.isNaN背后的区别

首先,NaN这个东西代表的是not a number;

### isNaN

1. isNaN是无法判断变量是否为NaN这个东西,这个值, 只能判断变量是否为not a number. 例子: ```isNaN('somestringValue')```返回就是true,然而somestringValue明显不是NaN这个值,背后的原因是,isNaN在执行判断传入的值之前,做了类似于```Number('somestringValue')```这种转换操作,导致值变成了```Number('somestringValue')---NaN``` ,所以就变成了```isNaN(NaN)```这种判断了,结果当然就是true了.

Number.isNaN

1. 这个就是用于处理变量是否为NaN这个值了,