const response = await axios.get(url, {
    params: {
        input,
        key: process.env.GOOGLE_API_KEY,
        sessiontoken: sessionToken,
        location: '48.8566,2.3522', // Paris
        radius: 50000, // 50 km
        types: '(cities)', // Suggestions limitées aux villes
        components: country ? `country:${country}` : undefined
    },
});