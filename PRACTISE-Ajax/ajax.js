document.getElementById("button1").addEventListener("click", loadText);

function loadText() {
  var xhr = new XMLHttpRequest();

  //console.log(xhr);

  // OPEN - (method, file, async);
  xhr.open("GET", "database.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var students = JSON.parse(this.responseText);

      var output = "";

      var header = 
            `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Points</th>
            </tr>`

      for (i = 0; i < students.length; i++) {
        output += 
            `<tr class="points ${(students[i].exercise_points == null || students[i].exercise_points < 50 ? 'color1' : 'color2')}">
                <td> ${students[i].id} </td>
                <td> ${students[i].name} </td>
                <td> ${students[i].exercise_points} </td>
            </tr>`;
      }
      document.getElementById("table").innerHTML = header + output;
    }
  };

  xhr.send();
}
