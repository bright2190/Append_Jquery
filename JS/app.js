$(document).ready(() =>{
    $("#btn1").click(() =>{
        var name = $("#name").val();
        var c1 = $("#class").val();
        var row = "<tr><td>" + name + "</td><td>" + c1 + "</td></tr>";
        $("table tbody").append(row);
    });
});


$(document).ready(() =>{
    $("#btn2").click(() =>{
        var name = $("#name").val();
        var c2 = $("#class").val();
        var row = "<tr><td>" + name + "</td><td>" + c2 + "</td></tr>";
        $("table tbody").prepend(row);
    });
});


$(document).ready(() =>{
    $("#btn3").click(() =>{
        var name = $("#name").val();
        var c3 = $("#class").val();
        var row = "<tr><td>" + name + "</td><td>" + c3 + "</td></tr>";
        $("table tbody").after(row);
    });
});


$(document).ready(() =>{
    $("#btn4").click(() =>{
        var name = $("#name").val();
        var c4 = $("#class").val();
        var row = "<tr><td>" + name + "</td><td>" + c4 + "</td></tr>";
        $("table tbody").before(row);
    });
});