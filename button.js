//simple button that can be checked for if it is pressed in game loop
class button
{
    constructor(pos, size, name, state)
    {
        this.pos = pos;
        this.size = size;
        this.name = name;
        this.state = state;
    }

    checkPressed()
    {
        //check if mouse is inside button rect
        if (mouseX > this.pos.x - this.size.x/2 && mouseX < this.pos.x + this.size.x/2 && mouseY > this.pos.y - this.size.y/2 && mouseY < this.pos.y + this.size.y/2)
        {
            this.state.buttonPressed = this.name;
        }
    }

    drawButton()
    {
        strokeWeight(2);
        stroke(0,0,0);
        noStroke();
        fill(255, 255, 255);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        rectMode(CORNER);
    }

}