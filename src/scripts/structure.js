class Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		this.name = name;
		this.initialCost = initialCost;
		this.uraniumPerSecond = uraniumPerSecond;
		this.count = 0;
		this.costMultiplier = costMultiplier;
	}

	//calculating and returning how much a structure will increase in cost depending on how many structures you have
	cost() {
		return this.initialCost * this.costMultiplier(this.count);
		this.costMultiplier;
	}

	//buying a structure
	buy(amount) {
		this.count += amount;
	}
}

//multiplies the cost of a structure by a fixed value which is a power for later use in cost() function
function costMultiplier(x) {
  	return Math.pow(4, x);
}

class UraniumBooster extends Structure {
	constructor(name, initialCost, costMultiplier) {
		super(name, initialCost, 0, costMultiplier);
	}
	buyUraniumBooster(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.clickValue *= 2;
			planetClicker.uranium -= this.cost();
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};

class AutoClicker extends Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		super(name, initialCost, uraniumPerSecond, costMultiplier);
	}
	buyAutoClicker(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.uranium += this.uraniumPerSecond;
			planetClicker.uranium -= this.cost();
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}

		this.update = function() {
				planetClicker.uranium += planetClicker.uraniumPerSecond;
			}
	}
};

class Miner extends Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		super(name, initialCost, uraniumPerSecond, costMultiplier);
	}
	buyMiner(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.uranium -= this.cost();
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};

class MiningDrill extends Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		super(name, initialCost, uraniumPerSecond, costMultiplier);
	}
	buyMiningDrill(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.uranium -= this.cost();
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};

class UraniumMine extends Structure {
	constructor(name, initialCost, uraniumPerSecond, costMultiplier) {
		super(name, initialCost, uraniumPerSecond, costMultiplier);
	}
	buyUraniumMine(planetClicker) {
		if (planetClicker.uranium >= this.initialCost) {
			planetClicker.uranium -= this.cost();
			this.buy(1);
		} else {
			alert("You don't have enough uranium for that kind sir!");
		}
	}
};