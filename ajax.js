(function ($) {

  $('#btnLoadText').click(function () { $("#showResult").load("show.txt"); });
  $('#btnAjax').click(function () { callRestAPI() });

  // Perform an asynchronous HTTP (Ajax) API request.
  function callRestAPI() {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/photos/11', 
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      $('#showResult').html("Title of the Photos with index 11 is : " +response.title);
    });
  }
})(jQuery);