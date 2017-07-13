$( document ).foundation();

$(document ).ready(function(){

  var navLinkCount = ( $( "nav ul li a" ).length ) - 1;
  var navSpacerRotation = 0;
  $( "nav ul li a" ).each( function( index ){
    if( navLinkCount != index){
      $( this ).append( " <img class='pizza-spacer' src='images/NavPizzaSpacers.png' style='-ms-transform: rotate(" + navSpacerRotation + "deg); -webkit-transform: rotate(" + navSpacerRotation + "deg); transform: rotate(" + navSpacerRotation + "deg);'>" );
      navSpacerRotation += 72;
    }
  });

  //Slide in Mission statement after page is Loaded.
  $('#rita-mission div:last-of-type').animate({left: 0}, 1000);
  $('#rita-mission div:first-of-type').animate({left: 0}, 1600);


  //Assign the height of the free Pizza picture container
  // to match the free-pizza-section.
  var height = $("#free-pizza-section").height();
  $( '#free-pizza-picture' ).height(height);


  var freePicPosition = 0;
  $(window).scroll(function(){
    var wScroll = $(this ).scrollTop();


    if(wScroll >= 10 && wScroll <= 450){
      freePicPosition = -( ( wScroll ) / 2 );
      $('#challenge-header' ).css({
        'background-position' : '50% ' + freePicPosition + 'px'
      });
    }


    //Free Pizza Image moves in Parallax after specified x positions.
    if(wScroll >= 450 && wScroll <= 1150){

      freePicPosition = -( ( wScroll - 450 ) /6);
      $('#free-pizza-picture' ).css({
        'background-position' : '0 ' + freePicPosition + 'px'
      });

    }


  });




  if( $( window ).width() < 1000 && $( '#pizza-spacer:visible' ) ){
    $( '.pizza-spacer' ).hide();
  }

  $( window ).resize(function() {

    if( $( window ).width() < 1000 && $( '#pizza-spacer:visible' ) ){
      $( '.pizza-spacer' ).hide( "slow" );
    }else if($( '#pizza-spacer:hidden' )){
      $( '.pizza-spacer' ).show( 'slow' );
    }


  });


});






