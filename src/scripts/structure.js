class Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		this.name = name;
		this.initialCost = initialCost;
		this.uraniumPerSecond = uraniumPerSecond;
		this.count = 0;
		this.costMultiplier = costMultiplier;
	}

	cost() {
		return this.initialCost * this.costMultiplier(this.count);
		this.costMultiplier;
	}

	buy(amount) {
		this.count += amount;
	}
}

function costMultiplier(x, y) {
  	return Math.pow(y, x);
}

class UraniumBooster extends Structure {
	constructor(name, initialCost, costMultiplier) {
		super(name, initialCost, 0, costMultiplier);
	}
	buyUraniumBooster(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.clickValue *= 2;
			planetClicker.uranium -= this.cost();
			this.costMultiplier(4);
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};

class AutoClicker extends Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		super(name, initialCost, 0, costMultiplier);
	}
	buyAutoClicker(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.uranium -= this.cost();
			this.costMultiplier(3.5);
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};