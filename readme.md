Interactive Element (If/Else) descriptive report

Description of the Interactive Element:
- The chosen element is an interactive geometric face. 
- The colors of the composition change based on where the cursor is located on the screen, while the mouth opens or closes when the mouse is clicked.
Technical Implementation

AI Prompts Used: 
- Add an arc under the two circles proportionate to the dimensions of the canvas and the circles
- Code for the pastel pink background color (255,182,193)
- Code for the light blue (0,191,255)
- Flip the arc if mouseispressed so it creates an open mouth

Mouse Position (Colors): 
- The ⁠if/else⁠ conditions check ⁠mouseX⁠ and ⁠mouseY⁠ relative to the center of the canvas (⁠width/2⁠ and ⁠height/2⁠). 
- Depending on the quadrant the mouse is in, a different fill color is applied.
 Mouse Click (Mouth): 
- The ⁠if (mouseIsPressed)⁠ condition modifies the parameters of the ⁠arc()⁠ function, switching from an angle of 0-PI (open mouth) to an angle of PI-TWO_PI (closed mouth).
  
Concept
- Conditional logic transforms a simple static drawing into a reactive figure. 
- The user has direct control over the shapes: movement and clicking immediately alter the expression and aesthetics of the artwork, creating a dynamic visual experience.
