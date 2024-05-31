async function fetchImages() {
    const tag = document.getElementById('tagSelect').value;
    const response = await fetch(`/images?tag=${tag}`);
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