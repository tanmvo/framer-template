// Welcome to Framer

// This is just demo code. Feel free to delete it all.

// imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"images/icon.png"})
// imageLayer.center()

// // Define a set of states with names (the original state is 'default')
// imageLayer.states.add({
// 	second: {y:100, scale:0.6, rotationZ:100},
// 	third:  {y:300, scale:1.3},
// 	fourth:	{y:200, scale:0.9, rotationZ:200},
// })

// // Set the default animation options
// imageLayer.states.animationOptions = {
// 	curve: "spring(500,12,0)"
// }

// // On a click, go to the next state
// imageLayer.on(Events.Click, function() {
// 	imageLayer.states.next()
// })

Framer.Defaults.Layer.backgroundColor = "blue";

layerA = new Layer({
	width: 320,
	height: 480,
	name: "canvas"
})

layerB = new Layer({
	width: 400,
	height: 40,
	y: 440,
	name: "button",
	backgroundColor: "red",
	superLayer: layerA
})

layerA.center()
layerB.centerX()