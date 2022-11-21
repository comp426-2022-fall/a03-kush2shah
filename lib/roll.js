export function roll(sides, dice, rolls) {
    const die = {
        sides: sides || 6,
        diceCount: dice || 2,
        rollCount: rolls || 1,
        results: function() {
            let result = [];
            for (let i = 0; i < this.count; i++) {
                result += Math.floor(Math.random() * this.sides) + 1;
            }
            this.rollCount.push(result);
            return result;
        }
    }
    return JSON.stringify(die);
}