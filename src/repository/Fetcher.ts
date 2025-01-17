const API_PATH = 'http://127.0.0.1:8080/';

export class Fetcher {

	public async fetchApi(path: String) {
		const response = await fetch(API_PATH+path)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})


		return response;
	}
	public async postApi(path: string, data:any){
        const response = await fetch(API_PATH+path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            
        return response.json();
    }
}