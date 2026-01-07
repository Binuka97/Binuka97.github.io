let now = new Date();
now.setTime(now.getTime() + 60000);
document.cookie = "name=BikzCookie; expires=" + now.toUTCString() + "; path=/";
document.cookie="testCookie=Foo Bar; expires=Thu, 01 Dec 2099 12:00:00 UTC; path=/";


function getCookieValueByRegEx(a, b) {
    b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  };


    let cookie1 = getCookieValueByRegEx('testCookie');
    let cookie2 = getCookieValueByRegEx("UUID");
    
    console.log("Name cookie: " + cookie1);
    console.log("UUID cookie: " + cookie2);
    
    // const myInterval = setInterval(setColor, 15000);

    // function setColor() {
    //     console.log("Name cookie: " + cookie1);
    //   };

      