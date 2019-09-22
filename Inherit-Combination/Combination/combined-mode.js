/*组合模式
*	dog	=	poop() + wangwang()
* cat = poop() + miaomiao()
* cleaningRobot = run() + clean()
* murderRobot = run() + kill()
* 狗型杀人机器人 = run() + kill() + wangwang()
*/


/*不同class写dog,直接用函数+闭包*/
const createWang = state => ({
	wangwang: () => {
		console.log(`汪汪，我是${state.name}`)
	}
})

const createRun = state => ({
	run: () => state.position += 1
})

const createDog = name => {
	const state = {name, position: 0}  //闭包，外面拿不到state
	return Object.assign( //浅复制地址，会把wangwang()和run()复制过来
		{},
		createWang(state),
		createRun(state)
	)
}

const dog = createDog('小白')
console.log(dog) //{wangwang: ƒ, run: ƒ}
console.log(dog.wangwang()) //汪汪，我是小白
dog.run() //1
dog.run() //2
dog.run() //3