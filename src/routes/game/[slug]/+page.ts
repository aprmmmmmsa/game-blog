/** @type {import('./$types').PageLoad} */
export function load(data:any) {
    // console.log(data.data);
    // console.log(data.params.slug);
    return {
        gameDetail: data.data.gameDetail
    }
}