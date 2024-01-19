
export const server_calls = {
    get: async (uid?:string ) => { 
        const response = await fetch(`https://c2-flask.onrender.com/api/cars2/user/${uid}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://c2-flask.onrender.com/api/cars2`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        console.log(response.json)
        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://c2-flask.onrender.com/api/cars2/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }
        console.log(response.json)
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://c2-flask.onrender.com/api/cars2/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}