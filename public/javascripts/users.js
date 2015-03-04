// 用户列表脚本
$(function(){

  var $remove_btn = $('.removeUser');
  var $remove_submit = $('#removeSubmit');
  var $remove_cancel = $('#removeCancel');
  // 存储待删除用户ID隐藏域
  var $selected_id = $('#selectId');
  // 删除确认弹出框
  var $confirm_dialog = $('#removeConfirm');

  $remove_btn.on('click', function(){
    var $this = $(this);
    var _id = $this.attr('data-id');
    $selected_id.val(_id);
    $confirm_dialog.modal("toggle");
  });

  $remove_submit.on('click', function(){
    // 异步请求
    var $this = $(this);
    var _id = $selected_id.val();

  });

  $remove_cancel.on('click', function(){
    $selected_id.val('');
  });

});