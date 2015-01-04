layerA = new Layer()

layerA.width = 640
layerA.height = 1156
layerA.backgroundColor = '#EFEFEF'

layerA.scroll = true

layerB = new Layer({superLayer: layerA})
layerB.backgroundColor = "red"

layerB.width = 600
layerB.height = 100
layerB.name = "button"

layerB.style = {
	"border-radius": "8px",
	"text-align": "center",
	"font-size": "42px"
	"line-height": "42px"
	"padding": "25px 0"
}
layerB.html = "Submit"

layerB.midX = 320
layerB.y = 1200

layerB.on Events.Click, ->
	print this.frame