$(document).ready(() =>{
    $("#btn1").click(() =>{
        var name = $("#name").val();
        var c1 = $("#class").val();

        if(name != '' && c1 != '') {
            
            var row = "<tr><td>" + name + "</td><td>" + c1 + "</td></tr>";
            $("table tbody").append(row);

            $("#name").val("")
            $("#class").val("")
            

        } else {

           let modal = `
            <div class="modal">
            <div class="modal-dialog modal-dialog-centered mt-5">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-light">
                        <strong>Info</strong>
                        <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
                    </div>
    
                    <div class="modal-body">
                        <p>Nothing has being inputed in the Append Input Box</p>
                    </div>
    
                    <div class="modal-footer">
                        <button id="btn100" class="btn btn-danger" data-dismiss=".modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
           `;

           $("body").prepend(modal)

           $("body").css("background-color", "rgba(0, 0, 0, 0.2)")

           $("body").css("opacity", "1")

           $(".modal").show(200);

           $(".close").click(() => {
                $(".modal").hide(500);

                $("body").css("background-color", "blueviolet")

                // $("body").css("opacity", "1")

            })
            
            $("#btn100").click(() => {
                    $(".modal").hide(500);

                    $("body").css("background-color", "blueviolet")
            
            })
        }

        
    });
});


$(document).ready(() =>{
    $("#btn2").click(() =>{
        var name = $("#name").val();
        var c2 = $("#class").val();
        

        if(name != '' && c1 != '') {
            
            var row = "<tr><td>" + name + "</td><td>" + c1 + "</td></tr>";
            $("table tbody").append(row);

            $("#name").val("")
            $("#class").val("")
            

        } else {

           let modal = `
            <div class="modal">
            <div class="modal-dialog modal-dialog-centered mt-5">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-light">
                        <strong>Info</strong>
                        <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
                    </div>
    
                    <div class="modal-body">
                        <p>Nothing has being inputed in the Prepend Input Box</p>
                    </div>
    
                    <div class="modal-footer">
                        <button id="btn100" class="btn btn-danger" data-dismiss=".modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
           `;

           $("body").prepend(modal)

           $("body").css("background-color", "rgba(0, 0, 0, 0.2)")

           $("body").css("opacity", "1")

           $(".modal").show(200);

           $(".close").click(() => {
                $(".modal").hide(500);

                $("body").css("background-color", "blueviolet")

                // $("body").css("opacity", "1")

            })
            
            $("#btn100").click(() => {
                    $(".modal").hide(500);

                    $("body").css("background-color", "blueviolet")
            
            })
        }
    });
});


$(document).ready(() =>{
    $("#btn3").click(() =>{
        var name = $("#name").val();
        var c3 = $("#class").val();
        if(name != '' && c1 != '') {
            
            var row = "<tr><td>" + name + "</td><td>" + c1 + "</td></tr>";
            $("table tbody").append(row);

            $("#name").val("")
            $("#class").val("")
            

        } else {

           let modal = `
            <div class="modal">
            <div class="modal-dialog modal-dialog-centered mt-5">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-light">
                        <strong>Info</strong>
                        <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
                    </div>
    
                    <div class="modal-body">
                        <p>Nothing has being inputed in the After Input Box</p>
                    </div>
    
                    <div class="modal-footer">
                        <button id="btn100" class="btn btn-danger" data-dismiss=".modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
           `;

           $("body").prepend(modal)

           $("body").css("background-color", "rgba(0, 0, 0, 0.2)")

           $("body").css("opacity", "1")

           $(".modal").show(200);

           $(".close").click(() => {
                $(".modal").hide(500);

                $("body").css("background-color", "blueviolet")

                // $("body").css("opacity", "1")

            })
            
            $("#btn100").click(() => {
                    $(".modal").hide(500);

                    $("body").css("background-color", "blueviolet")
            
            })
        }
    });
});


$(document).ready(() =>{
    $("#btn4").click(() =>{
        var name = $("#name").val();
        var c4 = $("#class").val();

        if(name != '' && c1 != '') {
            
            var row = "<tr><td>" + name + "</td><td>" + c1 + "</td></tr>";
            $("table tbody").append(row);

            $("#name").val("")
            $("#class").val("")
            

        } else {

           let modal = `
            <div class="modal">
            <div class="modal-dialog modal-dialog-centered mt-5">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-light">
                        <strong>Info</strong>
                        <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
                    </div>
    
                    <div class="modal-body">
                        <p>Nothing has being inputed in the Before Input Box</p>
                    </div>
    
                    <div class="modal-footer">
                        <button id="btn100" class="btn btn-danger" data-dismiss=".modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
           `;

           $("body").prepend(modal)

           $("body").css("background-color", "rgba(0, 0, 0, 0.2)")

           $("body").css("opacity", "1")

           $(".modal").show(200);

           $(".close").click(() => {
                $(".modal").hide(500);

                $("body").css("background-color", "blueviolet")

                // $("body").css("opacity", "1")

            })
            
            $("#btn100").click(() => {
                    $(".modal").hide(500);

                    $("body").css("background-color", "blueviolet")
            
            })
        }


    });
});


