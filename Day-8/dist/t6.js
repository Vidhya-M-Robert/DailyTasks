"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function Direct(direct) {
    console.log(`You moved ${direct}`);
}
Direct(Direction.Up);
// Direct(Direction.Down);
// Direct(Direction.Right);
//# sourceMappingURL=t6.js.map