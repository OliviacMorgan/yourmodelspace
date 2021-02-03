function popup(mylink, windowname) {//created function with 2 arguments
//mylink is the object(link) calling the function, windowname is the unique name you will give to your window
//you need a unique name to target the correct popup, so multiple links could have same name therefore linking to same popup
      if (! window.focus)return true;//test for existance of window using window.focus method. window focus brings popup to front in view
        var href;//established var holding url that links to popup
      //two lines below figure out what the url is
      if (typeof(mylink) == 'string') href=mylink;//test if my link is a string. if it is a string we assign href the value the string
      else href=mylink.href;//if the link is not a string (<a> or <area> tag) we assign href the value of the objects href property

      window.open(href, windowname, 'width=400,height=200,scrollbars=yes');//calls popup to open
      //href is the url to open popup
      //windowname is unique name of popup
      //following arguments are properties of the window
   return false; }//return false to cancel the click on the link, if we don't return false the link will navigate the current window to the url of the popup

/* the following is an explication of the html link:
  <a href="mailchimp.html" onclick="return popup(this, 'notes')" class = "footer-button">Join Our Newsletter</a>
the href field is a spesific existing active link
Onclick is an attribute has a boolean property that returns a true or false statement. Our function is listen for a true for false statement
after you click the tags link your "popup" function is called
popup has two arguments: this indicates the link object itself, the script uses the object reference to get a URL for the popup. so we are not adding in redudent information by typing in the url twice
the second argument is the unique name of the popup, so multiple links could target the same popup when they use the same name.

*/
