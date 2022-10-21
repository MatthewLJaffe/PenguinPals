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
        if (mouseX > this.pos.x && mouseX < this.pos.x + this.size.x && mouseY > this.pos.y && mouseY < this.pos.y + this.size.y)
        {
            this.state.buttonPressed = this.name;
        }
    }

    drawButton()
    {
        strokeWeight(2);
        stroke(0,0,0);
        fill(255, 255, 255);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        noStroke();
    }

}