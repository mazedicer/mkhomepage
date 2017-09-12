$(document).ready(function(){
    //homepage dropdown menu
        $('.dropdown-item').on('click', function (e) {
            openSubMenu($(".dropdown-item").index(this));
            e.stopPropagation();
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
    
    //hide fixes
    var elements_to_hide_720 = [".carousel-info"];
    var elements_to_hide_820 = ["#logo_div"];
    var elements_to_hide_1000 = ["h1"];
    $(window).on('resize', function(){
      hideFix();
        logoFix();
    });
    hideFix();
    logoFix();
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
    //cards
    var card_template = `<div class="col-md-3 col-sm-6">
            <div class="card" style="width: 20rem;">
              <img class="card-img-top" src="{img_source}" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">{t_name}</h4>
                <p class="card-text">{t_description}</p>
              </div>
                </div>
            </div>`;
    var replace = ["{img_source}","{t_name}","{t_description}"];
    var replace_with = ["Mario", "John", "Dan"];
    var my_card_template = card_template.replaceArray(replace, replace_with);
    alert(my_card_template);
});