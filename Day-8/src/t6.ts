enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
function Direct(direct : Direction){
    console.log(`You moved ${direct}`);

}
Direct(Direction.Up);
// Direct(Direction.Down);
// Direct(Direction.Right);