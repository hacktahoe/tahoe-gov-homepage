

// <!-- search bar-
//  ================================================== -->

          $(document).ready(function(e){

              $('.search-panel .dropdown-menu').find('a').click(function(e) {
              e.preventDefault();
              var param = $(this).attr("href").replace("#","");
              var concept = $(this).text();
              $('.search-panel span#search_concept').text(concept);
              $('.input-group #search_param').val(param);
            });
          });


 //    <!-- secondaryDropdown/firstDropdown dropdowns-
 // ================================================== -->

(function(){

    var firstDropdownOptions = {
      'homeowner':['I want to...', 'check my permit status', 'remove a tree', 'something else?'], 
      'realtor':['I want to...', 'search property info', 'submit BMP Disclosure Form','find IPES score','something else?'],  
      'contractor':['I want to...', 'file a permit', 'check my permit status', 'schedule an inspection','something else?'],
      'consultant':['I want to...', 'file a permit', 'check my permit status', 'schedule an inspection','something else?'],
      'businessOwner':['I want to...', 'file a business permit','submit a permit to update my sign','something else?'],
      'citizen':['I want to...', 'learn more about Tahoe', 'file a complaint', 'report trash', 'something else?']};

    var firstDropdown = document.getElementById('firstDropdown');
    var secondaryDropdown = document.getElementById('secondDropdown');

    //on change is a good event for this because we are guarenteed the value is different
    firstDropdown.onchange = function(){
        //clear out secondaryDropdown
        secondaryDropdown.length = 0;
        //get the selected value from firstDropdown
        var _val = this.options[this.selectedIndex].value;
        //loop through index at the selected firstDropdown value
        for ( var i in firstDropdownOptions[_val]){
            //create option tag
            var op = document.createElement('option');
            //set its value
            op.value = firstDropdownOptions[_val][i];
            //set the display label
            op.text = firstDropdownOptions[_val][i];
            //append it to secondaryDropdown
            secondaryDropdown.appendChild(op);
        }
    };


    secondaryDropdown.onchange = function() {
         var _val = this.options[this.selectedIndex].value;

         if (_val == "something else?")

           $('searchBarID').show();

         else 
             $('searchBarID').hide();
    };
    //fire this to update secondaryDropdown on load
   // firstDropdown.onchange();

})();



  searchBarUsed : function(){

    $('.content').hide();
    
    $('.newContent').show();

    newContent = "<div class=\"sideMenu col-xs-3 col-md-2\"><div class=\"menu\"><h5 onclick=\"navigation.menuSelection(jobs)\" class=\"sideMenuLinks h5\">Jobs</h5><h5 onclick=\"navigation.menuSelection(housing)\" class=\"sideMenuLinks h5\">Housing<h5><h5 onclick=\"navigation.menuSelection(forSale)\" class=\"sideMenuLinks h5\">For sale<h5><h5 onclick=\"navigation.menuSelection(personals)\" class=\"sideMenuLinks h5\">Personals<h5><h5 onclick=\"navigation.menuSelection(forums)\" class=\"sideMenuLinks h5\">Forums<h5><h5 onclick=\"navigation.menuSelection(services)\" class=\"sideMenuLinks h5\">Services<h5><h5 onclick=\"navigation.menuSelection(community)\" class=\"sideMenuLinks h5\">Community<h5><h5 onclick=\"navigation.menuSelection(resumes)\" class=\"sideMenuLinks h5\">Resumes<h5></div></div>";

    newContent = newContent + "<div class=\"col-xs-9 col-md-10 card-group\">";
    newContent = newContent + "<h1 class=\"col-xs-12 col-md-12 title\">holiday rentals</h1>";

    newContent = newContent + "</div>";
    $('.newContent').html(newContent);
    $('.newContent').show();
  }
};

document.getElementById("searchBarButton").onclick = function() {
  navigation.searchBarUsed();
};
document.getElementById("searchBarTextInput").addEventListener( "keydown", function( e ) {
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
       // enter pressed
      navigation.searchBarUsed();
    }
}, false);
