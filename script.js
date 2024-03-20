$(document).ready(function() {
  // Submit product information to backend
  $('#confirmButton').on('click', function() {
    var productName = $('#productName').val();
    var productDetails = $('#productDetails').val();
    var isOnSale = $('#isOnSale').is(':checked');
    var stockQuantity = $('#stockQuantity').val();
    var productSpec = $('#productSpec').val();
    var promotionDate = $('#promotionDate').val();
    var promotionPrice = $('#promotionPrice').val();

    // AJAX POST request to backend
    $.ajax({
      url: '/addProduct',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        productName: productName,
        productDetails: productDetails,
        isOnSale: isOnSale,
        stockQuantity: stockQuantity,
        productSpec: productSpec,
        promotionDate: promotionDate,
        promotionPrice: promotionPrice
      }),
      success: function(response) {
        // Handle success response
        console.log(response);
      },
      error: function(xhr, status, error) {
        // Handle error response
        console.log(error);
      }
    });
  });
});
