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
    var elements_to_hide_1000 = ["h1"];
    $(window).on('resize', function(){
      hideFix();
    });
    hideFix();
    function hideFix(){
        elements_to_hide_720.map(hideShowElem_720);
        elements_to_hide_1000.map(hideShowElem_1000);
    }
    function hideShowElem_720(tag_elem){
        if ($(window).width() < 720){
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
});