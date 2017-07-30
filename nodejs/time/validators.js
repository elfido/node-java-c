const Validators = {
	unit: 5,
	roundTo(value, factor){
		let x = Math.round(value / factor) * factor;
		if (x>=60){
			x = 0;
		}
		return x;
	},
    /**
	 * @description Rounds a timestamp to its closest minute
	 * @param {*} t Time to be rounded to the closest minute
	 */
	roundTime(t){
		const d = new Date(parseInt(t));
		const minutes = Validators.roundTo(d.getMinutes(), Validators.unit);
		d.setSeconds(0);
		d.setMilliseconds(0);
		d.setMinutes( minutes );
		return d.getTime();
	},
	roundTimes(s, e){
		return [ Validators.roundTime(s), Validators.roundTime(e) ];
	},
	sToMinutes(v){
		return Math.floor( v / 60 );
	},
	mToMinutes(v){
		return Validators.sToMinutes(v / 1000);
	},
	init(unit){
		Validators.unit = unit;
		console.log(`roundingTo=${unit}`);
	}
};

module.exports = Validators;