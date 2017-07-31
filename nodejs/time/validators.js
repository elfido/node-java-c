const Validators = {
	unit: 5,
	factor: 0,
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
	roundTime2(t){
		const r = (Math.floor(t / Validators.factor)) * Validators.factor;
		return r;
	},
	roundTimes(s, e){
		return [ Validators.roundTime(s), Validators.roundTime(e) ];
	},
	roundTimes2(s, e){
		return [ Validators.roundTime2(s), Validators.roundTime2(e) ];
	},
	sToMinutes(v){
		return Math.floor( v / 60 );
	},
	mToMinutes(v){
		return Validators.sToMinutes(v / 1000);
	},
	init(unit){
		Validators.unit = unit;
		Validators.factor = unit * 60000;
		console.log(`roundingTo=${unit}`);
	}
};

module.exports = Validators;