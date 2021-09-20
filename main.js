const menu={open:false}
$("#myMenu").click(function(){
  if(innerWidth>700)return
if(!menu.open){
  menu.open=true;
  $(this).children("#s1").attr("style","transform:rotate(45deg);margin-top:14px;");

  $(this).children("#s3").attr("style","transform:rotate(-45deg);margin-top:-14px;");

  $(this).children("#s2").attr("style","margin-left:"+screen.width+"px");
  $("#menuC").animate({height:250},300);
 
}
else{ 
closeIcon($(this));  
}

});
function closeIcon(that){
  menu.open=false;
  that.children("#s1").attr("style","");
  that.children("#s3").attr("style","");
  that.children("#s2").attr("style","");
  $("#menuC").animate({height:0},300);
}

$("#contact").click(function(){
$("html,body").animate({scrollTop:$("body").height()},"slow");
closeIcon($("#myMenu"));
})

$("#skills").click(function(){
$("html,body").animate({scrollTop:$("#skillList").offset().top},"slow");
closeIcon($("#myMenu"));
})

$("#usage").click(function(){
  $("html,body").animate({scrollTop:$("#usageCtn").height()},"slow");
  closeIcon($("#myMenu"));
  })

action("form","submit",(e)=>{
e.preventDefault();
console.log(e);
$("form").ajaxSubmit({
  beforeSubmit:function(){
    console.log("i will be submited");
  },
  success:function(e){
    console.log(e)
  },
  error:function(){
    alert("error");
  }
})
})