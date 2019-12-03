window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello; /* Exercise 1.*/
    document.getElementById("rectangle").onclick = drawRectangle;/* Exercise 2.*/
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;/*Exercise 3.*/
    document.getElementById("triangle").onclick = drawTriangle;/*Exercise 4.*/
    document.getElementById("smile").onclick = drawFace;/*Exercise 5.*/
    document.getElementById("pyramid").onclick = drawPyramid;/*Exercise 6 (extra credit).*/
}
const sayHello = function() {
    // write your exercise 1 code here
    let message = window.prompt("Message:");
};

const drawRectangle = function() {
    // write your exercise 2 code here
};

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

const drawTriangle = function() {
    // write your exercise 4 code here
};

const drawFace = function() {
    // write your exercise 4 code here
};

const drawPyramid = function() {
    // write your exercise 5 code here
};
