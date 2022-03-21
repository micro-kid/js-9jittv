# EventEmitter

## 观察者模式

![OP](https://pic2.zhimg.com/80/v2-0a7ef7d1a328dc37eadefb29e0ea705d_720w.jpg)

所谓观察者模式，其实就是为了实现松耦合(loosely coupled)。

## 发布订阅模式

![PsP](https://pic2.zhimg.com/80/v2-b6ed65f370a766620718ad4227d5d4e5_720w.jpg)

在发布订阅模式里，发布者，并不会直接通知订阅者，换句话说，发布者和订阅者，彼此互不相识。

互不相识？那他们之间如何交流？

答案是，通过第三者，也就是在消息队列里面，我们常说的经纪人 Broker。

也就是说，发布订阅模式里，发布者和订阅者，不是松耦合，而是完全解耦的。
