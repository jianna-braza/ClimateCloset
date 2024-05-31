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