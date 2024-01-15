
export const server_calls = {
    get: async (uid?:string ) => { 
        const response = await fetch(`http://127.0.0.1:5000/api/cars2/user/${uid}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars2`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
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
        const response = await fetch(`http://127.0.0.1:5000/api/cars2/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
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
        const response = await fetch(`http://127.0.0.1:5000/api/cars2/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}