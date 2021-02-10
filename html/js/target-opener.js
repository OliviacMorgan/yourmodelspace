//this function helps you link back to your main page or another popup from a popup
//you could compare this target openerfuction to window.opener which returns a reference to a window with open() or using target attributes
//you can't use window.opener here because your main site does not have a unique name to target
function targetopener(mylink, closeme, closeonly) {//target opener function always takes 3 arguments
  //mylink: the link itself or this, second and third attributes are optional and default to false
  //closeme, test if popup should close
  //The third indicated if the popup should send user to linked resource or have popup focused, allows safe way to close popup after closing while still linking to existing page, ex: user found popup interface through search engine
  //when the second and third are false your popup in focus, when they are true your source page is in focus.

    //when you click the targetopener link the following happens:
    //we are checking if one or two of the following are flase.
    //this first if statement is helpful if for instance a browers directs you to that closing link, this will make sure it directs you to the main page instead.
    if (! (window.focus && window.opener))return true;//checks if your browser has a focus command, and if the current window was opened by another window that is not active
    //if window focus does not exist and/ or the opener link is not present then opener window gets focus directing to the reference url not your popup

    //window opener is the page that opened your popup
    window.opener.focus();//keep window opener in focus under the following conditions:
    if (! closeonly)window.opener.location.href=mylink.href; //if closeonly is true then your popup's href url is equal window opener's url
    //window.opener returns reference to the window that created the window popup
    //window.opener.location returns read-only property of the current location of that window that created the popup (list of properties including href)
    //window.opener.location.href returns the spesific href of the window opener
    if (closeme)window.close();//if closeme = true(with onClick) then close window with window.close interface.property
  return false; } //this makes our closeme, and closeonly values false by default again.
