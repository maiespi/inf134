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
        first_checkmark_line.mouseover(function(){
            rect.fill({ color: 'lightgrey'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'lightgrey'});
                second_checkmark_line.stroke({ color: 'lightgrey'});
            }
        })
        second_checkmark_line.mouseover(function(){
            rect.fill({ color: 'lightgrey'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'lightgrey'});
                second_checkmark_line.stroke({ color: 'lightgrey'});
            }
        })
        rect.mouseout(function(){
            this.fill({ color: 'white'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'white'});
                second_checkmark_line.stroke({ color: 'white'});
            }
            console.log("Mouse not hovering checkbox anymore");
        })
        first_checkmark_line.mouseout(function(){
            rect.fill({ color: 'lightgrey'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'lightgrey'});
                second_checkmark_line.stroke({ color: 'lightgrey'});
            }
            console.log("Mouse not hovering checkbox anymore");
        })
        second_checkmark_line.mouseout(function(){
            rect.fill({ color: 'lightgrey'});
            if (clicked == false) {
                first_checkmark_line.stroke({ color: 'lightgrey'});
                second_checkmark_line.stroke({ color: 'lightgrey'});
            }
            console.log("Mouse not hovering checkbox anymore");
        })
        rect.mouseup(function(){
            this.fill({ color: 'white'});
            console.log("Checkbox was just clicked");
        })
    }

    var RadioButton = function(){
        var clicked1 = false;
        var clicked2 = false;
        var clicked3 = false;

        var outside_circle1 = draw.circle(15)
        var outside_circle2 = draw.circle(15)
        var outside_circle3 = draw.circle(15)

        var inside_circle1 = draw.circle(10)
        var inside_circle2 = draw.circle(10)
        var inside_circle3 = draw.circle(10)

        outside_circle1.attr({
            stroke: 'black',
            fill: 'white'
        })

        inside_circle1.attr({
            fill:'white'
        })

        var text1 = draw.text(function(add) {
            add.tspan("Click radio button 1").attr({
                x: 800,
                y: 91,
                fill: 'black',
                'font-family': 'Montserrat, sans-serif',
                'font-size': '12px',
                'text-anchor': 'middle',
                'alignment-baseline': 'central'
            })
        })

        outside_circle2.attr({
            stroke: 'black',
            fill: 'white'
        })

        inside_circle2.attr({
            fill:'white'
        })

        var text2 = draw.text(function(add) {
            add.tspan("Click radio button 2").attr({
                x: 743,
                y: 127,
                fill: 'black',
                'font-family': 'Montserrat, sans-serif',
                'font-size': '12px'
            })
        })

        outside_circle3.attr({
            stroke: 'black',
            fill: 'white'
        })

        inside_circle3.attr({
            fill:'white'
        })

        var text3 = draw.text(function(add) {
            add.tspan("Click radio button 3").attr({
                x: 743,
                y: 157,
                fill: 'black',
                'font-family': 'Montserrat, sans-serif',
                'font-size': '12px'
            })
        })

        outside_circle1.move(710,86)
        outside_circle2.move(710,115)
        outside_circle3.move(710,145)

        inside_circle1.move(712.5,88.5)
        inside_circle2.move(712.5,117.5)
        inside_circle3.move(712.5,147.5)

        inside_circle1.click(function(event){
            if (clicked1 == false) {
                this.fill('pink')
                clicked1 = true
                console.log("Radio button 1 was clicked")
                if (clicked2 == true || clicked3 == true) {
                    clicked2 = false
                    clicked3 = false
                    inside_circle2.fill('white')
                    inside_circle3.fill('white')
                }
            } else {
                this.fill('white')
                clicked1 = false
                console.log("Radio button 1 was unclicked")
            }
        })

        inside_circle1.mouseover(function() {
            console.log("Mouse hovering radio button 1")
        })

        inside_circle1.mouseout(function() {
            console.log("Mouse stopped hovering radio button 1")
        })

        outside_circle1.click(function(event){
            if (clicked1 == false) {
                inside_circle1.fill('pink')
                clicked1 = true
                console.log("Radio button 1 was clicked")
                if (clicked2 == true || clicked3 == true) {
                    clicked2 = false
                    clicked3 = false
                    inside_circle2.fill('white')
                    inside_circle3.fill('white')
                }
            } else {
                inside_circle1.fill('white')
                clicked1 = false
                console.log("Radio button 1 was unclicked")
            }
        })

        inside_circle2.click(function(event){
            if (clicked2 == false) {
                this.fill('#90ee90')
                clicked2 = true
                console.log("Radio button 2 was clicked")
                if (clicked1 == true || clicked3 == true) {
                    clicked1 = false
                    clicked3 = false
                    inside_circle1.fill('white')
                    inside_circle3.fill('white')
                }
            } else {
                this.fill('white')
                clicked2 = false
                console.log("Radio button 2 was unclicked")
            }
        })

        inside_circle2.mouseover(function() {
            console.log("Mouse hovering radio button 2")
        })

        inside_circle2.mouseout(function() {
            console.log("Mouse stopped hovering radio button 2")
        })

        outside_circle2.click(function(event){
            if (clicked2 == false) {
                inside_circle2.fill('#90ee90')
                clicked2 = true
                console.log("Radio button 2 was clicked")
                if (clicked1 == true || clicked3 == true) {
                    clicked1 = false
                    clicked3 = false
                    inside_circle1.fill('white')
                    inside_circle3.fill('white')
                }
            } else {
                inside_circle2.fill('white')
                clicked2 = false
                console.log("Radio button 2 was unclicked")
            }
        })

        inside_circle3.click(function(event){
            if (clicked3 == false) {
                this.fill('#ffa500')
                clicked3 = true
                console.log("Radio button 3 was clicked")
                if (clicked1 == true || clicked2 == true) {
                    clicked1 = false
                    clicked2 = false
                    inside_circle1.fill('white')
                    inside_circle2.fill('white')
                }
            } else {
                this.fill('white')
                clicked3 = false
                console.log("Radio button 3 was unclicked")
            }
        })

        inside_circle3.mouseover(function() {
            console.log("Mouse hovering radio button 3")
        })

        inside_circle3.mouseout(function() {
            console.log("Mouse stopped hovering radio button 3")
        })

        outside_circle3.click(function(event){
            if (clicked3 == false) {
                inside_circle3.fill('#ffa500')
                clicked3 = true
                console.log("Radio button 3 was clicked")
                if (clicked1 == true || clicked2 == true) {
                    clicked1 = false
                    clicked2 = false
                    inside_circle1.fill('white')
                    inside_circle2.fill('white')
                }
            } else {
                inside_circle3.fill('white')
                clicked3 = false
                console.log("Radio button 3 was unclicked")
            }
        })
    }

return {Button, Checkbox, RadioButton}
}());

export{MyToolkit}