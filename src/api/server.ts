
const token = '0cbca462201d0c19961bbe89ed208f44eda84b61a7e1a127'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`http://127.0.0.1:5000/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        console.log(response.json)
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                'x-access-token': `Bearer ${token}`
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
        const response = await fetch(`http://127.0.0.1:5000/api/cars/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                'x-access-token': `Bearer ${token}`
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
        const response = await fetch(`http://127.0.0.1:5000/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}