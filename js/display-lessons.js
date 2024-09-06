document.addEventListener('DOMContentLoaded', function() {
    fetch('get_lessons.php')
        .then(response => response.json())
        .then(files => {
            const pdfList = document.getElementById('pdfList');
            const pdfViewer = document.getElementById('pdfViewer');

            files.forEach(file => {
                const previewContainer = document.createElement('div');
                previewContainer.className = 'pdf-preview';
                
                const canvas = document.createElement('canvas');
                previewContainer.appendChild(canvas);
                
                const titleElement = document.createElement('p');
                titleElement.textContent = file;
                previewContainer.appendChild(titleElement);

                previewContainer.addEventListener('click', () => displayPDF(file));
                pdfList.appendChild(previewContainer);

                // Generate preview
                generatePDFPreview(`uploads/lessons/${file}`, canvas);
            });
        })
        .catch(error => console.error('Error fetching PDF list:', error));
});

function generatePDFPreview(url, canvas) {
    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdf.getPage(1).then(page => {
            const scale = 0.5;
            const viewport = page.getViewport({ scale });

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: viewport
            };
            page.render(renderContext);
        });
    }).catch(error => console.error('Error generating PDF preview:', error));
}

function displayPDF(filename) {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = ''; // Clear previous content

    const embed = document.createElement('embed');
    embed.src = `uploads/lessons/${filename}`; // Update this path
    embed.type = 'application/pdf';
    embed.width = '100%';
    embed.height = '600px';

    pdfViewer.appendChild(embed);
}