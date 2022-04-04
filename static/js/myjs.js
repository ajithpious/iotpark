// //parameters
// var hostname = "industrial.api.ubidots.com"; //There are different brokers. You should enter the broker's hostname.
// var port = 1883; //The port number can be different based on a TLS or non-TLS connection.
// var ClientID = "ClientID_" + parseInt(Math.random() * 100);

// //Create a client instance
// var client = new Paho.MQTT.Client(hostname, Number(port), path = "/", ClientID);

// //Set callback handlers
// client.onConnectionLost = onConnectionLost;
// client.onMessageArrived = onMessageArrived;

// //Connect the client
// client.connect({ onSuccess: onConnect, userName: "BBFF-mjWuzFLYOAFGmJ3eUAEyKDX1comFsB", password: "", keepAliveInterval: 60, mqttVersion: 4 });
// // client.subscribe(filter = "/v1.6/devices/esp32/temp", { qos: 1 })

// //Called when client connects
// function onConnect() {
//     //Once a connection has been established, make a subscription and send a message
//     console.log("onConnect");
//     client.subscribe("/v1.6/devices/esp32/temp", { qos: 1 });
//     alert("Connected.");
// }

// //Called when the client loses its connection
// function onConnectionLost(responseObject) {
//     if (responseObject.errorCode != 0) {
//         console.log("onConnectionLost:" + responseObject.errorMessage);
//     }
// }

// //Called when a message arrives
// function onMessageArrived(message) {
//     console.log("Message arrived: topic=" + message.destinationName + ", message=" + message.payloadString);
//     if (message.destinationName == "subTopic") {
//         //Do something
//     }
// }



// for djnago
function getstatus() {

    $.ajax({
        url: '/getStatus',
        dataType: 'json',
        beforeSend: function() {
            $('#loader').removeClass('hidden')
            $('#park').addClass('hide')
        },
        success: function(data, status, xhr) {

            console.log(data)
                // let columns = JSON.parse(data.columns);
                // let values = JSON.parse(data.data);
                // let table = document.querySelector("table[id='rowsTable']");
                // table.innerHTML = "";
                // generateTable(table, values)
                // generateTableHead(table, columns)
                // let chk1 = document.querySelector("input[id='chk1']");
                // let chk2 = document.querySelector("input[id='chk2']");
                // let p = document.querySelector("p[id='temp']");
                // if (data.context.stat == 1) {
                //     chk1.checked = true
                // } else {
                //     chk1.checked = false
                // }
                // console.log(data)
            let car1 = document.querySelector("div[id='car1']")
            console.log(car1)
            car1.style.backgroundColor = "blue"
            console.log()
            if (data.value > 20) {
                car1.style.backgroundColor = "green"
            } else {
                car1.style.backgroundColor = "red"
            }
            // p.innerHTML = data.value

        },
        complete: function() {
            $('#loader').addClass('hidden');
            $('#park').removeClass('hide')
        }


    });

}