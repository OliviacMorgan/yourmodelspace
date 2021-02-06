//this function helps you link back to your main page or another popup
//you could compare this target openerfuction to window.opener which returns a reference to a window with open() or using target attributes
//you can't use window.opener here because your main site does not have a unique name to target
function targetopener(mylink, closeme, closeonly) {//target opener function always takes 3 arguments
  //mylink: the link itself or this, second and third attributes are optional and default to false
  //closeme, test if popup should close
  //The third indicated if the popup should send user to linked resource or have popup focused, allows safe way to close popup after closing while still linking to existing page, ex: user found popup interface through search engine
  //when the second and third are false your popup in focus, when they are true your source page is in focus.
    if (! (window.focus && window.opener))return true;//if your popup is not infocus and not opened
    window.opener.focus();
    if (! closeonly)window.opener.location.href=mylink.href;
    if (closeme)window.close();
  return false; }

console.log(test);
Read more: https://html.com/javascript/popup-windows/#ixzz6lbuYSnUz
