const styles = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
 background: black;
    color:#0f7dae ;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 50px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 100px;
    letter-spacing: 2px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 2px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
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

const generateHTML = (pageName) => {
  return `
   
   <div id="clouds">
      <div ></div>
      <div></div>
      <div ></div>
      <div ></div>
      <div ></div>
      <div ></div>
  </div>
  <div class='c'>
      <div class='_404'>404 source not found</div>
    
      <div class='_1'>Page has been blocked</div>
      <div class='_2'>Unblock ${pageName} to access</div>
  </div>
   `;
};

switch (window.location.hostname) 
{
  case "www.youtube.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;
  case "discord.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("DISCORD");
    break;
  case "www.spotify.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("SPOTIFY");
    break;
    case "www.reddit.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("Reddit");
    break;
  case "www.linkedin.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("LINKEDIN");
    break;
   case "www.github.com":
    document.head.innerHTML = styles();
    document.body.innerHTML = generateHTML("GITHUB");
    break;
}