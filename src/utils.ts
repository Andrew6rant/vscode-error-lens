export function truncate(str: string): string {
	const truncationLimit = 300;
	return str.length > truncationLimit ? str.slice(0, truncationLimit) + '…' : str;
}
export function isObject(x: any): boolean {
	return typeof x === 'object' && x !== null;
}
