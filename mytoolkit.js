import { SVG } from './svg.min.js';

var MyToolkit = (function() {
    var draw = SVG().addTo('body').size('100%','100%');

    var Button = function(){
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
                'font-family': 'Montserrat, sans-serif',
                'font-size': '14px',
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
                        'font-family': 'Montserrat, sans-serif',
                        'font-size': '14px',
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
                        'font-family': 'Montserrat, sans-serif',
                        'font-size': '14px',
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
        text.click(function(){
            click_function()
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

    var Checkbox = function(){
        var clicked = false;
        var rect = draw.rect(50,50).attr({
            fill: 'white',
            stroke: 'rgb(0,0,0)',
            'stroke-width': 2,
            x: 300,
            y: 100
        })

        var text = draw.text(function(add) {
            add.tspan("Click the checkbox to the left").attr({
                x: 495,
                y: 125,
                fill: 'black',
                'font-family': 'Montserrat, sans-serif',
                'font-size': '18px',
                'text-anchor': 'middle',
                'alignment-baseline': 'central'
            })
        })

        var first_checkmark_line = draw.line(350, 100, 300, 150).attr({
            stroke: 'white',
            'stroke-width': 2,
        })

        var second_checkmark_line = draw.line(300, 100, 350, 150).attr({
            stroke: 'white',
            'stroke-width': 2,
        })

        var click_function = function() {
            if (clicked == false) {
                first_checkmark_line.stroke('black');
                second_checkmark_line.stroke('black');
                clicked = true;
                console.log("Checkbox is checked");
            } else {
                first_checkmark_line.stroke('white');
                second_checkmark_line.stroke('white');
                clicked = false;
                console.log("Checkbox is unchecked");
            }
        }

        rect.click(function(event){
            click_function()
        })
        first_checkmark_line.click(function(event){
            click_function()
        })
        second_checkmark_line.click(function(event) {
            click_function()
        })
        rect.mouseover(function(){
            this.fill({ color: 'lightgrey'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'lightgrey'});
                second_checkmark_line.stroke({ color: 'lightgrey'});
            }
            console.log("Mouse hovering checkbox");
        })
        // first_checkmark_line.mouseover(function(){
        //     rect.fill({ color: 'lightgrey'});
        // })
        // second_checkmark_line.mouseover(function(){
        //     rect.fill({ color: 'lightgrey'});
        // })
        rect.mouseout(function(){
            this.fill({ color: 'white'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'white'});
                second_checkmark_line.stroke({ color: 'white'});
            }
            console.log("Mouse not hovering checkbox anymore");
        })
        rect.mouseup(function(){
            this.fill({ color: 'white'});
            console.log("Checkbox was just clicked");
        })
    }
return {Button, Checkbox}
}());

export{MyToolkit}