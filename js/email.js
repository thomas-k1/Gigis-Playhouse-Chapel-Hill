document.getElementById('mailing-list-form').addEventListener('submit', function(event) {
    console.log("click")
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById('email').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_email.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('response-message').innerText = response.message;
        }
    };

    xhr.send('email=' + encodeURIComponent(email));
});