import { Fetcher } from '../../repository/Fetcher'

/** @type {import('./$types').PageServerload} */
export function load(data: any){
	const fetcher: any = new Fetcher();
	const detail = fetcher.fetchApi(`users`);
	// console.log(detail);
	return {
		userDetail: detail
	}
}