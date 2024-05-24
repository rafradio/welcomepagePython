let form = document.getElementById("newNote");
let subm = document.getElementById("return");



function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function pushData() {
    let dataold = new FormData(form);
    for (var [key, value] of dataold) {
        console.log(key, value)
    }
    let csrftoken = getCookie('csrftoken');
    let data = new FormData();
    data.append('file', dataold.get('idMysql'));
    console.log(dataold['dateMysql']);
    data.append('fileName', dataold.get('dateMysql'));
    let url = new URL(window.location.href);
    console.log(url);
    // let dataToSend = {'testMy': 'posttest', 'formNewMy': 'new daa'};
    fetch(url, {
        method: 'POST',
        headers: {
            "X-CSRFToken": csrftoken
        },
        body: data
    });

}

// form.onsubmit = function(event) {
//     event.preventDefault();
//     let dataold = new FormData(form);
//     for (var [key, value] of dataold) {
//         console.log(key, value)
//     }
//     let csrftoken = getCookie('csrftoken');
//     let data = new FormData();
//     data.append('file', dataold.get('idMysql'));
//     console.log(dataold['dateMysql']);
//     data.append('fileName', dataold.get('dateMysql'));
//     let url = new URL(window.location.href);
//     console.log(url);
//     // let dataToSend = {'testMy': 'posttest', 'formNewMy': 'new daa'};
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             "X-CSRFToken": csrftoken
//         },
//         body: data
//     });
// }

subm.onclick = function(event) {
    event.preventDefault();
    pushData();
    
}