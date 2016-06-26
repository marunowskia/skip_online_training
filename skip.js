var filter = "[rel=next]"
var linkattr = "href"

var nextpage = window.open($(filter).attr(linkattr))
setInterval(
    function() 
    { 
      if( $(filter, nextpage.document))
      {
        if($(filter, nextpage.document).attr(linkattr))
        {
          var other = window.open($(filter, nextpage.document).attr(linkattr))
          other.onload = nextpage.onload
          nextpage=other
        }
      }
    },
10000)
