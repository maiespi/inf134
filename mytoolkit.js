import { SVG } from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%');
        var rect = draw.rect(100,50).attr({
            fill: 'pink',
            stroke: 'rgb(0,0,0)',
            'stroke-width': 2
        })
        var text = draw.text(function(add) {
            add.tspan("Click me!").attr({
                x: 150,
                y: 125,
                fill: 'black',
                'text-anchor': 'middle',
                'alignment-baseline': 'central'
            })
        })
        var clickEvent = null
        var clicked = false

        var click_function = function(){
            if(clicked == false) {
                text.clear()
                text = draw.text(function(add) {
                    add.tspan("I was clicked!").attr({
                        x: 150,
                        y: 125,
                        fill: 'black',
                        'text-anchor': 'middle',
                        'alignment-baseline': 'central'
                    })
                })
                console.log("Button was clicked")
                clicked = true
            }
            else {
                text.clear()
                text = draw.text(function(add) {
                    add.tspan("I'm unclicked!").attr({
                        x: 150,
                        y: 125,
                        fill: 'black',
                        'text-anchor': 'middle',
                        'alignment-baseline': 'central'
                    })
                })
                console.log("Button was uncliked")
                clicked = false
            }     
        }

        rect.mouseover(function(){
            this.fill({ color: '#90ee90'})
            console.log("Mouse hovered button")
        })
        rect.mouseout(function(){
            this.fill({ color: 'pink'})
            console.log("Mouse stopped hovering button")
        })
        rect.mouseup(function(){
            this.fill({ color: 'pink'})
            console.log("User finished clicking button")
        })
        rect.click(function(event){
            this.fill({ color: '#ffa500'})
            click_function()
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            }
        }
    }
return {Button}
}());

export{MyToolkit}