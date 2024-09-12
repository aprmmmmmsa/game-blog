import { Fetcher } from '../../repository/Fetcher'

/** @type {import('./$types').PageServerload} */
export function load(data: any){
	const fetcher: any = new Fetcher();
	const detail = fetcher.fetchApi(`news`);
	// console.log(detail);
	return {
		newsDetail: detail
	}
}