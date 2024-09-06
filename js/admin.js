document.getElementById('admin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == config.ADMIN_USERNAME && password == config.ADMIN_PASSWORD) {
        const form = document.getElementById('admin-form');
        form.remove();

        var uploadForm = document.getElementById("upload-visibility");
        uploadForm.setAttribute("style", "visibility:visible");

        //var adminForm = document.getElementById("admin-form");
        //adminForm.setAttribute("style", "visibility:hidden");
    }
});