$(".submit").click(function() {
    $(".results").show();
    let age = $(".age").val();
    let taste = $(".taste").val();
    if (age < 16 && taste === "sweet") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be mozzarella cheese!</p>");
    } else if (age < 16 && taste === "sour") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be cheddar cheese!</p>");
    } else if (age >= 16 && taste === "sweet") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be brie cheese!</p>");
    } else if (age >= 16 && taste === "sour") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be goat cheese!</p>");
    } else {
        $(".results").append("<p>You are cottage cheese, gross... you must have typed something wrong.</p>");
    }
});