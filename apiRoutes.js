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
try {
    const response = await fetch(`/api/data?query=${encodeURIComponent(searchInput)}`);
    const contentType = response.headers.get('content-type');
    
    // Check if response is JSON
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Received non-JSON response');
    }
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
    }
    
    // Display results
    resultsContainer.innerHTML = formatResults(data);
} catch (error) {
    errorContainer.textContent = error.message;
    errorContainer.classList.remove('d-none');
}
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