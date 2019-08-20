//递归阶乘
j = n => n === 1 ? 1 : n * j(n - 1);
j(1); 	//1
j(2);	//2
j(3);	//6
j(4);	//24


//斐波拉契数列
fib = n => n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
fib(0);			//0
fib(1);			//1
fib(2);			//1
fib(3);			//2
fib(4);			//3
fib(5);			//5
fib(10);		//55