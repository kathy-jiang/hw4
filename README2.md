How many times does the loop body run each frame, once the x and y arrays are full?
6

What are two ways of increasing the spacing between rings?
change the number of "var i = 40"in line 15
change the number of "i = i + 100" in line 15

How can you make the ellipse trail longer?
line 16  "ellipse(x[i], y[i], 1 + (x.length - i))"
         "ellipse(x[i], y[i], 100 + (x.length - i))"
         
line19  x = x.slice(-50); 
line20  y = y.slice(-50); 
line19  x = x.slice(-200); 
line20  y = y.slice(-50); 

