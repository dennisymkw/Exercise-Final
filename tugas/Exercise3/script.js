function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("content").innerHTML = this.responseText;
        var data = JSON.parse(this.responseText);
        var obj = data.results;   
        table = document.getElementById("tbody");
        tr = table.getElementsByTagName("tr");
        console.log(obj);
        for(var i=0; i<obj.length; i++){
            // console.log(obj[i]);
            var row = table.insertRow(0);
            var c1 = row.insertCell(0);
            var c2 = row.insertCell(1);
            var c3 = row.insertCell(2);
            var c4 = row.insertCell(3);
            var c5 = row.insertCell(4);
            var c6 = row.insertCell(5);
            var c7 = row.insertCell(6);

            c1.innerHTML = obj[i].name;
            c2.innerHTML = obj[i].rotation_period;
            c3.innerHTML = obj[i].climate;
            c4.innerHTML = obj[i].terrain;
            for(var j=0; j<obj[i].residents.length; j++){
                c5.innerHTML += "<a href="+obj[i].residents[j]+">"+obj[i].residents[j]+"</a><br>";
            } 
            c6.innerHTML = "<a href="+obj[i].url+">"+obj[i].url+"</a>";
            c7.innerHTML = obj[i].created;
        }
      }else if(this.readyState == 4 && this.status != 200){
        alert("Tidak terhubung ke swapi.co . cek koneksi internet anda");
      }
    };
    xhttp.open("GET", "https://swapi.co/api/planets/?format=json", true);
    xhttp.send();
    // console.log(data);
}

function searchTable() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        td4 = tr[i].getElementsByTagName("td")[4];
        td5 = tr[i].getElementsByTagName("td")[5];
        td6 = tr[i].getElementsByTagName("td")[6];
        if (td || td1 || td2 || td3 || td4 || td5 || td6) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td1.innerHTML.toUpperCase().indexOf(filter) > -1 || td2.innerHTML.toUpperCase().indexOf(filter) > -1 || td3.innerHTML.toUpperCase().indexOf(filter) > -1|| td4.innerHTML.toUpperCase().indexOf(filter) > -1|| td5.innerHTML.toUpperCase().indexOf(filter) > -1|| td6.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function(){
    // do something
    loadXMLDoc();
});
