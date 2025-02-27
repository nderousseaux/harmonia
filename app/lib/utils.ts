// Standard Normal variate using Box-Muller transform.
export function gaussianRandom(mean=0, stdev=1) {
	const u = 1 - Math.random(); // Converting [0,1) to (0,1]
	const v = Math.random();
	const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	// Transform to the desired mean and standard deviation:
	return z * stdev + mean;
}


// Transform a number to a duration string (e.g. 1234 -> "20:34")
export function formatDuration(duration: number ) {
	const minutes = Math.floor(duration / 60);
	const seconds = duration % 60;
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}