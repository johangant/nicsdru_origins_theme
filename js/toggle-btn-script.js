(function($,Drupal){Drupal.behaviors.nicsdruOriginsToggleBtn={attach:function(context){$(".toggle-list",context).once("toggleBtn").each(function(){var $relatedArtList=$(this).children("ul"),maxRel=parseInt($(this).attr("data-toggle-length"),10||7),relTotal=$relatedArtList.children("li").length,available=relTotal-maxRel,relToggleText=Drupal.t("Show @num more",{"@num":available});if(relTotal>maxRel){$relatedArtList.attr({id:"toggle-menu","aria-live":"polite"});$relatedArtList.children("li:nth-child(n+"+(maxRelated+1)+")").toggle();$relatedArtList.after('<a href="#" id="related-toggle" class="toggle-btn" role="button" aria-pressed="false" aria-controls="toggle-menu">'+relToggleText+'<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg></a>');$("#related-toggle").click(function(){$relatedArtList.children("li:nth-child(n+"+(maxRelated+1)+")").toggle("slow");$(this).attr("aria-pressed","true").hide();return false})}})}}})(jQuery,Drupal);