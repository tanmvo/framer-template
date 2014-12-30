layerA = new Layer()

layerA.width = 320
layerA.height = 578
layerA.center()

layerB = new Layer({superLayer: layerA})
layerB.borderRadius = "10"
layerB.backgroundColor = "red"
layerB.width = 300
layerB.height = 60
layerB.style = {
	"border-radius": "4px",
	"text-align": "center"
	"padding": "15px 20px"
}
layerB.html = "Submit"
layerB.centerX()
layerB.y = 508

layerB.on Events.Click, ->
	print this.frame