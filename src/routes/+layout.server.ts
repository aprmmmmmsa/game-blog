import { Fetcher } from '../repository/Fetcher';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event : any) => {
        const data = await event.request.formData();
        console.log(data);
        const nameData = {
            name: data.get("name"),
        };
        const fetcher : Fetcher = new Fetcher();
        const result = fetcher.postApi("search", nameData);

    }
  };