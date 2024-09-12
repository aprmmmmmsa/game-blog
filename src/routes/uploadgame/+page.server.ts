import { Fetcher } from '../../repository/Fetcher';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event : any) => {
        const data = await event.request.formData();
        console.log(data);
        const gameData = {
            name: data.get("name"),
            price: data.get("price"),
            type: data.get("type"),
            url: data.get("url"),
            detail: data.get("detail")
        };
        const fetcher : Fetcher = new Fetcher();
        const result = fetcher.postApi("game/add", gameData);

    }
  };