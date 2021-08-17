class Structure {
	constructor(name, initialCost, uraniumPerSecond) {
		this.name = name;
		this.initialCost = initialCost;
		this.uraniumPerSecond = uraniumPerSecond;
		this.count = 0;
		this.costMultiplier = 1;
	}

	cost() {
		return this.initialCost * this.costMultiplier;
		this.costMultiplier;
	}

	buy(amount) {
		this.count += amount;
	}
}

function costMultiplier(x) {
  	return Math.pow(x, 2)
}

class autoClicker extends Structure {
	constructor(name, initialCost, uraniumPerSecond) {
	super(name, initialCost, uraniumPerSecond);
	}
}