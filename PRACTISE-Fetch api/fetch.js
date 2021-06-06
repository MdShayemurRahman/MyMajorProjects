document.getElementById('text').addEventListener('click', TextInput);
document.getElementById('local_json').addEventListener('click', GetData);
//document.getElementById('online_json').addEventListener('click', PostData);

// get data from fetch.txt
function TextInput(){
    fetch('fetch.txt') // fetch('url/filename')
    .then(function(res) {  // promise
        return res.text();
    })
    .then(function(data) { // promise
        document.getElementById('dummytext').innerHTML = data;
    })
    .catch(console.error());
}

// get data from database.json
function GetData(){
    fetch('database.json') // fetch('url/filename')
    .then((res) => res.json())
    .then((data) => {
        
        // getting two data.. using array slice method..
        console.log(data.students.slice(Math.max(data.students.length-2,1))); //splice
// array slice reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        let output = 
        `<tr class="table table-primary">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>`

        for(i=0;i<data.students.length;i++){
            output += 
            `<tr>
                <td>${data.students[i].id}</td>
                <td>${data.students[i].name}</td>
                <td>${data.students[i].email}</td>
            </tr>`;
        }

        document.getElementById('getdata').innerHTML = output;
    });
}