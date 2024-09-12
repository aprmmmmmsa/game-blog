import { Fetcher } from '../../repository/Fetcher';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event : any) => {
        const data = await event.request.formData();
        console.log(data);
        const newsData = {
            name: data.get("name"),
            detail1: data.get("detail1"),
            detail2: data.get("detail2")
        };
        const fetcher : Fetcher = new Fetcher();
        const result = fetcher.postApi("news/add", newsData);

    }
  };