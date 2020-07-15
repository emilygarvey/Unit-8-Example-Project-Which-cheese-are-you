$(".submit").click(function() {
    $(".results").show();
    let age = $(".age").val();
    let taste = $(".taste").val();
    if (age < 16 && taste === "sweet") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be mozzarella cheese!</p>");
        $(".results").append("<img src='https://www.seriouseats.com/recipes/images/2015/10/20151017-pies-vicky-wasik-2.jpg'>");
    } else if (age < 16 && taste === "sour") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be cheddar cheese!</p>");
        $(".results").append("<img src='https://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes-super-169.jpg'>");
    } else if (age >= 16 && taste === "sweet") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be brie cheese!</p>");
        $(".results").append("<img src='https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_large.jpg?v=1533088694'>");
    } else if (age >= 16 && taste === "sour") {
        $(".results").append("<p>Since you are " + age + " years old and you like foods that taste " + taste + ", you must be blue cheese!</p>");
        $(".results").append("<img src='https://www.murrayscheese.com/site/images/items/20098000000.0.jpg?resizeid=9&resizeh=300&resizew=300'>");
    } else {
        $(".results").append("<p>You are cottage cheese, gross... you must have typed something wrong.</p>");
        $(".results").append("<img src='https://assets.bonappetit.com/photos/5b7c2ee51ec1690f8a7a26c3/master/pass/ba-cottage-cheese-1.jpg'>");
    }
});