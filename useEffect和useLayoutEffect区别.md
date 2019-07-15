### useEffect和useLayoutEffect区别

#### useEffect

基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.

#### useLayoutEffect

这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.

可能讲的不是很清楚,看个例子吧

```react
import React, { useEffect, useLayoutEffect, useRef } from "react";
import TweenMax from "gsap/TweenMax";
import './index.less';

const Animate = () => {
	const REl = useRef(null);
	useEffect(() => {
        /*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/
		TweenMax.to(REl.current, 0, {x: 600})
	}, []);
	return (
		<div className='animate'>
			<div ref={REl} className="square">square</div>
		</div>
	);
};

export default Animate;

```



![gifhome_1536x760_5s](C:\Users\DELL\Downloads\gifhome_1536x760_5s.gif)

可以清楚的看到有一个一闪而过的方块.



改成useLayoutEffect试试

![gifhome_1536x760_5s (1)](C:\Users\DELL\Downloads\gifhome_1536x760_5s (1).gif)

可以看出,每次刷新,页面基本没变化



https://kentcdodds.com/blog/useeffect-vs-uselayouteffect