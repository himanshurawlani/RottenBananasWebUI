  var database = firebase.database();
  var ref = database.ref('angel');

  ref.on("value",function(snapshot){
      data= snapshot.val();
      console.log(typeof data);
      $("#card-renderer").html("");
      $.each(data,function(key,val){
        var date = key;
        var string_date = "'"+date+"'";
        var days_left = val['days_left'];
        var fruit = val['fruit'];
        var state = val['state'];
        console.log(val['days_left']);

        var progress_class = "";
        var width = "";

        if(state == "ripe")
        {
          progress_class = "bg-warning";
          width = "50%";
        }
        else if(state == "over ripe")
        {
          progress_class = "bg-danger";
          width = "80%";
        }
        else
        {
          progress_class = "bg-success";
          width = "30%";
        }
        $("#card-renderer").append('<div class="col-lg-3 col-md-6 col-sm-6"><div class="card card-stats"><div class="card-header card-header-warning card-header-icon"><div class="card-icon"><img class="img" src="../assets/img/veg/banana.png" /></div><h4 class="card-title">'+state+'\t'+fruit+'</h4><h3 class="card-title">'+days_left+' Days</h3></div><div class="card-footer"><div class="progress-group" style="width: 100%">Scanned On :'+date+'<span class="float-right"></span><div class="progress progress-md"><div class="progress-bar '+progress_class+'" style="width: '+width+'"></div></div></div><br><p><button type="button" class="btn btn-danger btn-round btn-just-icon" onclick="deleteEntry('+string_date+')"><i class="material-icons" style="text-align:center;">delete</i></button></p></div></div></div>');
        /*console.log(key);
        $.each(val,function(key2,val2){
          console.log(key2+" "+val2);
        });*/
      });
      console.log(data);
  },function(error){
      console.log(error.code);
  });

  function deleteEntry(id)
  {
    firebase.database().ref('angel/'+id).remove();
  }