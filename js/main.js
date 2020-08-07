$( document ).ready( () => {

  $( '#btn-search' ).on( 'click', () => {
    const titleValue = $( '#title' ).val() !== "" ? `&s=${ $( '#title' ).val() }` : "";

    $.ajax( `http://www.omdbapi.com/?apikey=135f640d&s=${ titleValue }` )
      .done( ( data ) => {
        console.log( 'data', data );
        let resultsHTML = '<ul>';
        data.Search.forEach( ( movie ) => {
          resultsHTML += `<li>${ movie.Title }</li>`;
        } );
        resultsHTML += '</ul>';

        $( '#results' ).html( resultsHTML );
      } );
  } );

} );
