'use strict';

(function ($) {
  var $productList = $('.product-list');
  if ($productList.length) {
    $productList.find('> li').each(function() {
      // Add preview images for each template.
      var $this = $(this);
      var previewURL = $this.find('.product-list__item-thumbnail .item-thumbnail__image a img').attr('data-preview-url');
      var $previewImage = $('<img class="item-preview-image"/>').attr('src', previewURL);
      $this.prepend($previewImage);
    });
  }
}) (jQuery);
