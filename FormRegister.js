function displayTable() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city = document.getElementById('city').value;
    var address = document.getElementById('address').value;
    var languages = document.querySelectorAll('input[name="languages"]:checked');
    var languagesArr = [];
    for (var i = 0; i < languages.length; i++) {
        languagesArr.push(languages[i].value);
    }

    var tableData = "<h2>Результати реєстрації</h2>" +
        "<table>" +
        "<tr><th>Ім'я</th><td>" + firstName + "</td></tr>" +
        "<tr><th>Прізвище</th><td>" + lastName + "</td></tr>" +
        "<tr><th>Дата народження</th><td>" + birthdate + "</td></tr>" +
        "<tr><th>Стать</th><td>" + gender + "</td></tr>" +
        "<tr><th>Місто</th><td>" + city + "</td></tr>" +
        "<tr><th>Адреса</th><td>" + address + "</td></tr>" +
        "<tr><th>Мови, якими володіє</th><td>" + languagesArr.join(", ") + "</td></tr>" +
        "</table>";

    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('tableContainer').innerHTML = tableData;
}