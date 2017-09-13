$(document).ready(function(){  
    //load templates
    //splash
    fetch("./view/index/splash.html")
    .then((resp)=>resp.text())
    .then(function(data){
        $("#splash_row").html(data);
        //homepage dropdown menu
        $('.dropdown-item').on('click', function (e) {
            openSubMenu($(".dropdown-item").index(this));
            e.stopPropagation();
        });
    })
    .catch(function(error){
       alert(error); 
    });
    //carousel
    fetch("./view/index/carousel.html")
    .then((resp)=>resp.text())
    .then(function(data){
        $("#carousel_row").html(data);
        //hide fixes
        $(window).on('resize', function(){
            hideFix();
            logoFix();
        });
        hideFix();
        logoFix();
    })
    .catch(function(error){
       alert(error); 
    });
    //our team
    fetch("./view/index/our-team.html")
    .then((resp)=>resp.text())
    .then(function(data){
        $("#our_team_row").html(data);
    })
    .catch(function(error){
       alert(error); 
    });
    //cards
    fetch("./view/index/card.html")
        .then((resp)=>resp.text())
        .then(function(data){
            var replace = ["{img_source}","{t_name}","{t_description}"];
            var replace_with = ["Mario", "John", "Dan"];
            var my_card_template = data.replaceArray(replace, replace_with);
            $("#our_team_cards_row").html(my_card_template);
    })
      .catch(function(error) {
        alert(error);
      }); 
    
    function openSubMenu(elem){
        console.log(elem);
            switch(elem){
                case 1:
                    $(".dropdown-item.ps-item").toggle();
                    break;
                case 6:
                    $(".dropdown-item.c-item").toggle();
                    break;
                    }
    }
    
    var elements_to_hide_720 = [".carousel-info"];
        var elements_to_hide_820 = ["#logo_div"];
        var elements_to_hide_1000 = ["h1"];
    function hideFix(){
        elements_to_hide_720.map(hideShowElem_720);
        elements_to_hide_820.map(hideShowElem_820);
        elements_to_hide_1000.map(hideShowElem_1000);
    }
    function hideShowElem_720(tag_elem){
        if ($(window).width() < 720){
            $(tag_elem).hide();
        }else{
            $(tag_elem).show();
        }
    }
    function hideShowElem_820(tag_elem){
        if ($(window).width() < 820){
            $(tag_elem).hide();
        }else{
            $(tag_elem).show();
        }
    }
    function hideShowElem_1000(tag_elem){
        if ($(window).width() < 1000){
            $(tag_elem).hide();
        }else{
            $(tag_elem).show();
        }
    }
    //logo fix
    function logoFix(){
        var left_position = ($(window).width() / 2) - 100;
        $("#logo_div").offset({left:left_position});
    }
    

});