/** @type {import('./$types').PageLoad} */
export function load(data:any) {
    // console.log(data.data);
    // console.log(data.params.slug);
    return {
        newsDetail: data.data.newsDetail
    }
}