var firebaseConfig = {
    apiKey: "AIzaSyBLvvP974M8UrV0bg7xIiqIVOOG6EHJUlQ",
    authDomain: "amhuman-98902.firebaseapp.com",
    databaseURL: "https://amhuman-98902-default-rtdb.firebaseio.com",
    projectId: "amhuman-98902",
    storageBucket: "amhuman-98902.appspot.com",
    messagingSenderId: "545915893567",
    appId: "1:545915893567:web:9b08c7b9e515828763058a"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let record=document.getElementById('records');
var userData=firebase.database().ref('Users');
userData.on('value',gotData);

function gotData(data){
    var users=data.val();
    var keys=Object.keys(users);
    
    for(var i=0;i<keys.length;i++){
        var k=keys[i];
        var address=users[k].Address;
        var color=users[k].Color;
        var contact=users[k].Contact;
        var delivery=users[k].Delivery;
        var district=users[k].District;
        var name=users[k].Name;
        var qty=users[k].Quantity;
        var size=users[k].Size;
        var date=users[k].Date;
        pushRows(date,name,address,district,contact,size,color,qty,delivery);

    }
}

function pushRows(date,name,address,district,contact,size,color,qty,delivery){

    let row=`
        <tr>
            <th scope="row">${date}</th>
            <td>${name}</td>
            <td>${address}</td>
            <td>${district}</td>
            <td>${contact}</td>
            <td>${size}</td>
            <td>${color}</td>
            <td>${qty}</td>
            <td>${delivery}</td>
        </tr>   `

    record.innerHTML+=row  
            
            
}