function convertFahrToCelsius(degFahr) {
		let deg_type_check = typeof degFahr;
		if (deg_type_check === "object") {
			if (Array.isArray(deg_type_check)) {
				console.log(`${degFahr} is not a valid number but a/an array`);
			} else {
				console.log(
					JSON.stringify(degFahr),
					` is not a valid number but a/an object`
				);
			}
		} else {
			// * formular for deg celsius
			let convertFahr_int = parseInt(degFahr);
			let degCelsius = (convertFahr_int - 32) * (5 / 9);
			let degCelsiusToDecimalPlace = degCelsius.toFixed(4);
			console.log(degCelsiusToDecimalPlace);
		}
	}

	convertFahrToCelsius(0);
	convertFahrToCelsius("0");
	convertFahrToCelsius([1, 2, 3]);
	convertFahrToCelsius({ temp: 0 });





	