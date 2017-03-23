
//绑定和触发事件
// var events = require("events");
// var event = new events.EventEmitter();

// event.on('trigger_event',function(){
// 	console.log("trigger_event");
// });
// setTimeout(function(){
// 	event.emit('trigger_event');
// },1000);


// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event',function(){
// 	console.log("some_event triggered");
// });

// setTimeout(function(){
// 	event.emit('some_event');
// },1000);

//EventEmitter对象如果在实例化的时候发生错误，会触发error事件。
//当添加新的监听器,newListener事件会触发
//当监听器移除时，removeListener事件被触发
//on 函数用于绑定事件函数，emit 属性用于触发一个事件。
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){//注册监听
	console.log('listener00001',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener00002',arg1,arg2);
});
emitter.emit('someEvent','Michonne','Huangtouge');