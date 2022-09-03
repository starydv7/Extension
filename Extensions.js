const styles = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
 background: black;
    color:#0f7dae ;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .con {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  .err {
    font-size: 50px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 100px;
    letter-spacing: 2px;
  }
  .fir {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 2px;
    font-size: 4em;
    line-height: 80%;
  }
  .sec {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  .text {
    font-size: 90px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
 
  
  
   </style>`;
};

const newHTML = (pageName) => {
  return `
   
   <div id="new">
      <div ></div>
      <div></div>
      <div ></div>
      <div ></div>
      <div ></div>
      <div ></div>
  </div>
  <div class='con'>
      <div class='err'>404 source not found</div>
    
      <div class='fir'>Page has been blocked</div>
      <div class='sec'>Unblock ${pageName} to access</div>
  </div>
   `;
};

switch (window.location.hostname) 
{
  case "www.youtube.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("NETFLIX");
    break;
  case "discord.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("DISCORD");
    break;
  case "www.spotify.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("SPOTIFY");
    break;
    case "www.reddit.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("Reddit");
    break;
  case "www.linkedin.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("LINKEDIN");
    break;
   case "www.github.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = newHTML("GITHUB");
    break;
}


