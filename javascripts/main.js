$( document ).ready( function() {;
  $( '#actions_button' ).on('click', function(e) {
    e.preventDefault();
    switchToActions( reset_content );
  });

  $( '#use_cases_button' ).on('click', function(e) {
    e.preventDefault();
    switchToUseCases( reset_content );
  });

  function switchToActions( callback ) {
    $( '#actions_bg' ).addClass( 'actions_button_active' ).removeClass( 'actions_button_inactive' );
    $( '#use_cases_bg' ).addClass( 'use_cases_button_inactive' ).removeClass( 'use_cases_button_active' );
    $( '#actions_wrapper' ).addClass( 'active').removeClass( 'inactive' );
    $( '#use_cases_wrapper' ).addClass( 'inactive').removeClass( 'active' );
    if( callback !== undefined ) { callback(); }
  }

  function switchToUseCases( callback ) {
    $( '#actions_bg' ).addClass( 'actions_button_inactive' ).removeClass( 'actions_button_active' );
    $( '#use_cases_bg' ).addClass( 'use_cases_button_active' ).removeClass( 'use_cases_button_inactive' );
    $( '#actions_wrapper' ).addClass( 'inactive' ).removeClass( 'active' );
    $( '#use_cases_wrapper' ).addClass( 'active' ).removeClass( 'inactive' );
    if( callback !== undefined ) { callback(); }
  }

  function reset_content() {
    var width = $( window ).width();
    var offset;

    if ( width > 1024 ) {
      offset = 240;
    } else {
      offset = 0;
    }

    $( 'html, body' ).animate( { scrollTop: offset }, 'normal');
  }

  $('.page_nav').on( 'click',function(e) {
    e.preventDefault();
    switchToActions();

    var target = $( this ).attr( 'href' );
    var width = $( window ).width();
    var distance;

    if ( width > 1024 ) {
      distance = $( target ).offset().top - 210;
    } else if ( width > 480 ) {
      distance = $( target ).offset().top - 260;
    } else {
      distance = $( target ).offset().top - 290;
    }

    $( "html, body" ).animate( { scrollTop: distance }, 'normal' );
  });

  $( window ).on( 'scroll', function(){
    var width = $( window ).width();

    if ( width > 1024 ) {
      $( "#sticky_nav" ).css( "top", Math.max( 0,240-$(this).scrollTop() ) );
    }
  });

});