var init = function() {
  var clicks = new Array(6);
  for(i=0;i<clicks.length;++i){
    clicks[i] = 0;
  }
  clicks[0] = 1;
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
        switch(panelClassName){
          //case "show-front":
          //  clicks[0] = 1;
          //  break;
          case "show-back":
            clicks[1] = 1;
            break;
          case "show-right":
            clicks[2] = 1;
            break;
          case "show-left":
            clicks[3] = 1;
            break;
          case "show-top":
            clicks[4] = 1;
            break;
          case "show-bottom":
            clicks[5] = 1;
            break;
          case "show-seven":
            document.getElementById('square').style.display='block';
            document.getElementById('cube').style.display='none';
            
            //document.getElementById("reset-box").style.display='inline';
            
              for(i=0;i<clicks.length;++i){
                clicks[i] = 0;
              }
            
  
            break;
        }
        
       var clicked = 0;
       for(i=0;i<clicks.length;++i){
          if(clicks[i] == 1){
            clicked++;
          }
        }
        
        if(clicked == 6){
          document.getElementById("seven-link").style.display="inline";
          

          document.getElementById("front-link").style.display="none";
          document.getElementById("back-link").style.display="none";
          document.getElementById("right-link").style.display="none";
          document.getElementById("left-link").style.display="none";
          document.getElementById("top-link").style.display="none";
          document.getElementById("bottom-link").style.display="none";
        }
        

      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  //document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
    box.toggleClassName('panels-backface-invisible');
  //}, false);
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);

document.getElementById('reset-box').addEventListener( 'click', function(){
            document.getElementById("seven-link").style.display="none";
          

          document.getElementById("front-link").style.display="inline";
          document.getElementById("back-link").style.display="inline";
          document.getElementById("right-link").style.display="inline";
          document.getElementById("left-link").style.display="inline";
          document.getElementById("top-link").style.display="inline";
          document.getElementById("bottom-link").style.display="inline";
          
            document.getElementById('square').style.display='none';
            document.getElementById('cube').style.display='block';
            
            document.getElementById("reset-box").style.display='none';

          init();

}, false);
