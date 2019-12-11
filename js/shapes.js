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
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);

  let message = window.prompt("Message:");

  while (message !== null && message.length > 50){
    message = window.prompt("Message:");
  }

  if (message !== null) {
    ctx.font = '48px sans-serif';
    ctx.strokeText(message, 30, 70, 994);
  }
};

const drawRectangle = function() {
  const secondcanvas = document.getElementById('student-canvas-2');
  const ctx2 = secondcanvas.getContext('2d');
  ctx2.clearRect(0,0, secondcanvas.width, secondcanvas.height);

    let width = window.prompt("Width:");
    let height = window.prompt("Height:");
    let x = window.prompt("X:");
    let y = window.prompt("Y:");

if (width >= 1 && width <= 1024 && height >= 1 && height <= 512 && x >= 1 && y >= 1){
    ctx2.strokeRect(x, y, width, height)
  }

  // make it ask for correct numbers
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
