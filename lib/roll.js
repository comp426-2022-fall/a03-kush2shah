function roll(sides, dice, rolls) {
    return {
        sides: sides || 6,
        diceCount: dice || 2,
        rollCount: rolls || 1,
        roll: function() {
            var result = 0;
            for (var i = 0; i < this.count; i++) {
                result += Math.floor(Math.random() * this.sides) + 1;
            }
            this.rollCount.push(result);
            return result;
        }
    };
}