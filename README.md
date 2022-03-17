# debounce

效果：如果短时间内大量触发同一事件，只会执行一次函数

实现：既然前面都提到了计时，那实现的关键就在于 setTimeout 这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现

在给定的时间内继续执行事件就会清除定时器然后重新开始计时，直到你在这个时间段内不再执行事件，这个函数才会触发
