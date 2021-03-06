var anchor_links = [];
var current_active_anchor = "";

var $window = $(window);

$(function(){
    // Register all anchor links
    $("[id^=anchor]").each(function (i, el) {
        var link_id = "link_" + el.id;
        anchor_links.push(link_id);
        $('#inpage_menu').append(
            "<a id=\"" + link_id + "\" class=\"menu_item stein\" href=\"#" +
                el.id + "\">" + el.getAttribute('name') +
                " <span id=\"" + link_id +
                "_span\" class=\"inmenu_dot fa fa-circle\" aria-hidden=\"true\"></span></a>");
    });

    current_active_anchor = $("[id^=anchor]").first().id;

    // hide all # for anchor link in page menu
    makeAllLinksInactive(anchor_links);
    // show # for active anchor link in page menu (initial top link)
    makeLikeActive(current_active_anchor);

    // What happens when we click scroll to anchor link
    $('a[href*="#"]:not([href="#"])').click(function(event) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 180
                }, 500); // Timer for scroll action do not lower

                // update shown # for active link
                makeLinkInactive(current_active_anchor);
                current_active_anchor = event.target.id;
                makeLikeActive(current_active_anchor);

                return false;
            }
        }
    });
});

$window.scroll(function(){
    current = [];
        $("[id^=anchor]").each(function (i, el) {
            if(isScrolledIntoView(el)){
                current.push(el.id);
            }
        });
    makeAllLinksInactive(anchor_links);
    current_active_anchor = "link_" + current[0];
    makeLikeActive(current_active_anchor);
});

function makeAllLinksInactive(elements) {
    for(i = 0; i < elements.length; i++) {
        makeLinkInactive(elements[i]);
    }
}

function makeLinkInactive(element){
    var cid = "#" + element + "_span";
    $(cid).css("color", "#C0C0C0");
}

function makeLikeActive(element){
    var cid = "#" + element + "_span";
    $(cid).css("color", "#000000");
}

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
