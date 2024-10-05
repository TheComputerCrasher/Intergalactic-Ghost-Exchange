// This is the source code for Planet Life's Intergalactic Ghost Exchange.
// I used inspect element to copy the code and paste it here.

function calculateGhostPrice() {
	ghostTradeTick = 0;
	var chance = (Math.random() * state.ghostTrend) + (state.ghostTrend / 2);
	if (state.ghostTrendy) {
		updateState("ghostTrend", state.ghostTrend - 1);
	} else {
		updateState("ghostTrend", state.ghostTrend + 1);
	}
	if (!state.ghostTrendy && chance > 25) {
		updateState("ghostTrendy", true);
	}
	if (state.ghostTrendy && chance < 3) {
		updateState("ghostTrendy", false);
	}
	var newValue = 1;
	if (Math.random() > 0.9) {
		newValue = 2;
	}
	if (state.ghostPrice > 24) {
		ghostBuffer = -10;
	} else if (state.ghostPrice < 5) {
		ghostBuffer = 10;
	} else {
		ghostBuffer = 0;
	}
	if (chance > (10 + ghostBuffer)) {
		updateState("ghostPrice", state.ghostPrice -= newValue);
		if (state.ghostPrice < 1) {
			updateState("ghostPrice", 1);
		}
	} else {
		updateState("ghostPrice", state.ghostPrice += newValue);
	}
	
// This commented-out part of the code is used to tell the player when the ghost prices change.
// It causes an error here because the animations aren't set up.

/*
	if (place == "goGhostTrade") {
		upgradeAnimation("The new ghost predictions are in!","ghost",goGhostTrade);
	}
*/

}


// The scripts below are just used to simulate how the game would use the function.
// It starts by setting variables like "ghostPrice" to what they would be in the game, 
// then it calls the "calculateGhostPrice" function repeatedly and prints the results.

function updateState(key, value) {
    state[key] = value;
}

let state = {
    ghostPrice: 10,
    ghostTrend: 5,
    ghostTrendy: true
}

while (1 == 1) {
calculateGhostPrice();
print(state.ghostPrice);
}