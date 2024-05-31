async function fetchImages() {
    const tag = document.getElementById('tagSelect').value;
    try {
        const response = await fetch(`/api/images?tag=${tag}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const images = await response.json();
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = `/uploads/${image.filename}`;
            img.alt = image.tag;
            img.style.width = '100px';
            imageContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    console.log(result);
    alert('Image uploaded successfully!');
    this.reset();
});

async function fetchAllClothing() {
    try {
        const response = await fetch('/api/all-clothing'); // Correct endpoint with /api prefix
        const clothingData = await response.json();

        const allClothingContainer = document.getElementById('allClothingContainer');
        allClothingContainer.innerHTML = ''; // Clear previous content

        clothingData.forEach(item => {
            const img = document.createElement('img');
            img.src = `/uploads/${item.filename}`;
            img.alt = item.tag;
            img.style.width = '100px';
            allClothingContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching all clothing data:', error);
    }
}

/*
async function fetchImagesByWeather() {
    try {
        // Fetch weather data from your API
        const response = await fetch("/api/weather");
        const weatherData = await response.json();
        const { currentTemp } = weatherData;

        // Determine clothing tag based on temperature
        let clothingTag = '';
        if (currentTemp < 25) {
            clothingTag = "Cold";
        } else if (currentTemp < 40) {
            clothingTag = "Cold";
        } else if (currentTemp < 60) {
            clothingTag = "Cool";
        } else if (currentTemp < 80) {
            clothingTag = "Warm";
        } else {
            clothingTag = "Hot";
        }

        // Fetch clothing images based on clothing tag
        const responseClothing = await fetch(`/api/images?tag=${clothingTag}`);
        const clothingImages = await responseClothing.json();

        // Display clothing images
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';
        clothingImages.forEach(image => {
            const img = document.createElement('img');
            img.src = `/uploads/${image.filename}`;
            img.alt = image.tag;
            img.style.width = '100px';
            imageContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching clothing data based on weather:', error);
    }
}
*/
