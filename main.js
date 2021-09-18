const menu={open:false}
$("#myMenu").click(function(){
if(!menu.open){
  menu.open=true;
  $(this).children("#s1").attr("style","transform:rotate(45deg);margin-top:14px;");

  $(this).children("#s3").attr("style","transform:rotate(-45deg);margin-top:-14px;");

  $(this).children("#s2").attr("style","margin-left:"+screen.width+"px");
}
else{
  menu.open=false;
  $(this).children("#s1").attr("style","");

  $(this).children("#s3").attr("style","");

  $(this).children("#s2").attr("style","");
}

});
clickImageViewer();