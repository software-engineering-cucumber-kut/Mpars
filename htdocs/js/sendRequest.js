const sendRequest = () => {
    let request_json = { contents: $('#request-text').val() };
    let sending_string = JSON.stringify(request_json);
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8888/stub/putRequest.php',
        datatype: 'json',
        data: sending_string
    }).done((res) => {
        if (JSON.parse(res).success) {
            location.href = "http://localhost:8888/compRequest.php";
        } else {
            console.log("request sending failed");
        }
    });
};
