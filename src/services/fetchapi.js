
export const fetchApi = async (query, variables = {}, token) => { 
    try {
        console.log("Fetching GraphQL with the following details:");
        console.log("URL:", `${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`);
        console.log("Query:", query);
        console.log("Variables:", variables);
        console.log("Token:", token);

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : '',
            },
            body: JSON.stringify({
                query: query.loc.source.body, 
                variables: variables
            }),
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const json = await res.json();
        if (json.errors) {
            throw new Error(json.errors.map(error => error.message).join(', '));
        }

        return json.data;
    } catch (error) {
        console.error('Error fetching GraphQL:', error);
        throw new Error('Error fetching GraphQL');
    }
}
