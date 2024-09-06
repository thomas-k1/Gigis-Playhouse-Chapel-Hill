document.addEventListener('DOMContentLoaded', function() {
    fetch('get_images.php')
        .then(response => response.json())
        .then(files => {
            const galleryGrid = document.getElementById('gallery-grid');

            files.forEach(file => {
                const button = document.createElement('button');
                //button.textContent = file;
                button.classList.add('gallery-card');
                button.addEventListener('click', () => displayImage(file));

                const img = document.createElement('img');
                img.src = `uploads/images/${file}`;
                button.appendChild(img)

                galleryGrid.appendChild(button);
            });
        })
        .catch(error => console.error('Error fetching Image list:', error));
});

function displayImage(filename) {
    var popup = document.getElementById("popup");
    popup.getElementsByTagName('img')[0].src = `uploads/images/${filename}`;
    popup.setAttribute("style", "visibility:visible");
}

function clickPopup() {
    var popup = document.getElementById("popup");
    popup.setAttribute("style", "visibility:hidden");
}