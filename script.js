$(document).ready(function() {
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
        $.each(data, function(key, user) {
            var listItem = $("<li></li>")
                .addClass("list-group-item")
                .text(user.name)
                .click(function() {
                    alert("Clicked user: " + user.name);
                });
            $("#user-list").append(listItem);
        });
    });
});