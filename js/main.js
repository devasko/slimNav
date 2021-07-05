$( document ).ready( function () {
   // ЯКласс активной вкладки
    const listItems = document.querySelectorAll( '.item' );
    function activeLink() {
        listItems.forEach( ( item ) => {
            item.classList.remove( 'active' );
            this.classList.add( 'active' )
        });

        // this.classList.add( 'active' )
    }

    listItems.forEach( item => {
        item.addEventListener( 'click', activeLink )
    });
});
