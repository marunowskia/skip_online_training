var filter = "[rel=next]"
var linkattr = "href"

var nextpage = window.open($(filter).attr(linkattr))
setInterval(
    function() 
    { 
      if( $(filter, other.document))
      {
        if($(filter, other.document).attr(linkattr))
        {
          other = window.open($(filter, other.document).attr(linkattr))
          other2.onload = other.onload
        }
      }
    },
10000)
