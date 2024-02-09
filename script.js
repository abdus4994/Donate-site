$(document).ready(function(){
  // Donation Section
    $(".one").click(function(){
        $("#donate").val("100");        
      });
      $(".two").click(function(){
        $("#donate").val("200");        
      });
      $(".three").click(function(){
        $("#donate").val("500");        
      });
      $(".four").click(function(){
        $("#donate").val("1000");        
      });
      $(".five").click(function(){
        $("#donate").val("5000");        
      });

      $(".donated").click(function(){        
        let dAmount = $("#donate").val()
        if (isNaN(dAmount) || dAmount < 1){
          alert("Plz Entry any amount")
        }
        else{         
          $("#invoice").show(1000); 
          let rAmount = $("#donate").val()
          $("#received-amount").text(rAmount);
        }
      $("#donate").val(" ")
      });


      // invoice section

      $("#submit").click(function(){
        let name = $("#fulName").val();
        if(name!= "") {
          $("#challan").show(1000);
          $("#donanar-name").text(name);
          let challanAmount = $("#received-amount").text();
          $("#donate-tk").text(challanAmount);
          $("#invoice").hide(); 
        }else{
          alert("Enter Your Full Name")
        }
        
       //$("#fulName").val(" ");
      })

      


      // Subscribe section js
      $("#Subscribed").click(function(){
        let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let mailText = $("#subEmail").val();
        if (mailText.match(validRegex)) {
          $(".subscribe-box").html(`<h1 >Thank You for Subscribed</h1>`);          
        }        
        else{
          alert("Ener your valid email address!");
          
        }
      })


    })
