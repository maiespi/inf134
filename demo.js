// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(40,70);
btn.onclick(function(e){
	console.log(e);
});
btn.setText("Click me!");
btn.onWidgetStateChange(function(e) {
    console.log(e.type);
});

// Implement a MyToolkit Checkbox
var checkbox = new MyToolkit.Checkbox;
checkbox.move(200, 70);
checkbox.onclick(function(e) {
    console.log(e);
});
checkbox.setText("Click this checkbox to the left");
checkbox.onWidgetStateChange(function(e) {
    console.log(e.type);
});

// Implement a MyToolkit Radio Button
var radiobutton = new MyToolkit.RadioButton(2);
radiobutton.move(580, 70);
radiobutton.onclick(function(e) {
    console.log(e)
});
radiobutton.setText(1, "Radio Button 1");
radiobutton.setText(2, "Radio Button 2");
radiobutton.onWidgetStateChange(function(e) {
    console.log(e.type);
})

// Implement a MyToolkit Textbox
var textbox = new MyToolkit.TextBox;
textbox.move(200,320);
textbox.onTextUpdate(function(e) {
    console.log(e);
});
textbox.onWidgetStateChange(function(e) {
    console.log(e.type);
});
console.log(textbox.getText());

// Implement a MyToolkit Scrollbar
var scrollbar = new MyToolkit.ScrollBar;
scrollbar.move(45,200);
scrollbar.onThumbMove();
scrollbar.setHeight(400);

// Implement a MyToolkit Progress Bar
var progressbar = new MyToolkit.ProgressBar;
progressbar.move(200,200);
progressbar.setWidth(400);
progressbar.setIncrementValue(30);
progressbar.getIncrementValue();
progressbar.incrementProgress(94);
progressbar.onIncrement(function (e) {
    console.log(e);
});
progressbar.onWidgetStateChange(function (e) {
    console.log(e.type);
})

// CUSTOM: Implement a MyToolkit Toggle Button
var togglebutton = new MyToolkit.ToggleButton;
togglebutton.move(200, 480);
togglebutton.onAction(function(e) {
    console.log(e);
});
togglebutton.onWidgetStateChange(function(e) {
    console.log(e.type);
});