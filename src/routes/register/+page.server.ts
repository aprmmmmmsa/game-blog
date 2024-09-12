import { Fetcher } from '../../repository/Fetcher';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event : any) => {
        const data = await event.request.formData();
        console.log(data);
        const registerData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        };
        const fetcher : Fetcher = new Fetcher();
        const result = fetcher.postApi("users/add", registerData);

    }
  };