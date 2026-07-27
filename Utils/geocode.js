module.exports.geocodeLocation = async (location, country) => {
    const searchText = `${location}, ${country}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchText)}`,
            { headers: { 'User-Agent': 'WanderlustApp/1.0' } }
        );
        clearTimeout(timeoutId);
        const data = await response.json();

        if (data.length > 0) {
            return {
                type: "Point",
                coordinates: [Number(data[0].lon), Number(data[0].lat)]
            };
        } else {
            console.log(`No geocode match for: ${searchText}`);
            return null;
        }
    } catch (err) {
        console.log(`Geocoding failed for ${searchText}:`, err.message);
        return null;
    }
};