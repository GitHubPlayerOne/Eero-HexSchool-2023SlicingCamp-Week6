// 每個有 .needs-validation 的 <form> 元素，觸發 submit 事件時，
// 將該元素加入 class 'was-validated'
$('.needs-validation').each(function (index) {
  $(this).on('submit', function (e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });
});
