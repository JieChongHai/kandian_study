var baseURL = "http://134.175.154.93:8099"; 
function myAjax(type,url,data,sFunc,eFunc){
  $.ajax({
    type: type,
    url: baseURL+url,
    data: data,
    success: sFunc,
    error: eFunc
  });
}