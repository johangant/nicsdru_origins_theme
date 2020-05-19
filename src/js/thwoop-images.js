/**
 * @file
 * Provides a script to thwoop (expand/contract) responsive images.
 *
 * @todo: add the needed CSS and responsive image styles / display modes
 *        to make this work.
 */

/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruOriginsThwoopImages = {
    attach: function attach (context) {
      // Make responsive image styles thwoopable.
      var thwoopImageSelector = 'picture[data-picture-mapping*="_expandable"] img';
      var $thwoopImages = $(thwoopImageSelector, context);

      // Add a clickable/focusable wrapper and icon to indicate image is thwoopable.
      $thwoopImages.once('thwoop-toggle').each(function () {
        $(this).after('<a class="thwooper" href="#">Enlarge</a>');
      });

      // Click or keypress toggles thwoop.
      $('.thwooper').click(function (event) {
        event.preventDefault();
        var $thwoopimage = $(this).prev('img');
        var $thwoop_wrap = $(this).closest('.media-image');
        var thwoop_picture_mapping = $thwoopimage.parent('picture').attr('data-picture-mapping');
        var modal = false;

        if (thwoop_picture_mapping == 'inline_xl_expandable') {
          modal = true;
        }

        if ($thwoopimage.hasClass('thwooped')) {
          $thwoopimage.removeClass('thwooped');
          $thwoop_wrap.removeClass('thwooped-modal');
          $(this).text('title', 'Enlarge');
        } else {
          $thwoopimage.addClass('thwooped');
          if (modal) $thwoop_wrap.addClass('thwooped-modal');
          $(this).text('Shrink');
        }
      });
    }
  };
})(jQuery, Drupal);
