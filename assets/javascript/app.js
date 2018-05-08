
$(document).ready(function(){

    
var animals = ["cat", "dog", "snake", "lizard"]

 
$("#select-animal").on("click", function(){
    event.preventDefault();
    var selectAnimal = $("#animal-input").val();
    animals.push(selectAnimal);
    name();
})
function name() {
    $("#animal-buttons").empty();
    for(var i=0; i<animals.length; i++) {
    
        var button = $("<span>");
        button.html("<button class='animals'>" + animals[i] + "</button>");
        $('#animal-buttons').append(button);
        
    
    }  

}
name();


});



// .addClass("animals")
// .attr("id", animals[i]);



