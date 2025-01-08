router.get('/data', async (req, res) => {
    try {
        const query = req.query.query; // Get search query from request
        
        // Add your API endpoint and configuration here
        const response = await axios.get('YOUR_API_ENDPOINT', {
            params: {
                q: query,
                // Add other API parameters as needed
            },
            headers: {
                // Add any required headers
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        handleApiError(error, res);
    }
});

// Additional routes can be added here
router.get('/categories', async (req, res) => {
    try {
        const response = await axios.get('YOUR_API_CATEGORIES_ENDPOINT');
        res.json(response.data);
    } catch (error) {
        handleApiError(error, res);
    }
});

module.exports = router;
