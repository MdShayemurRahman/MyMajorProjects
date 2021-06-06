document.getElementById("btn").addEventListener('click', loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      var output = "";

      var header = 
            `<tr>
                <th>Image</th>
                <th>ID</th>
                <th>login</th>
                <th>node_id</th>
            </tr>`;

      for (i = 0; i < users.length; i++) {
        output += 
        `<tr>
            <td> ${users[i].avatar_url} </td>
            <td> ${users[i].id} </td>
            <td> ${users[i].login} </td>
            <td> ${users[i].node_id} </td>
        </tr>`;
      }
      document.getElementById("data").innerHTML = header + output;
    }
  };

  xhr.send();
}
