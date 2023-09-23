// 显示表单，同时隐藏其他表单
function showForm(formId) {
  // 隐藏所有表单
  document.querySelectorAll('.form').forEach(function(form) {
    form.style.display = 'none';
  });
  // 显示指定表单
  document.querySelector('#' + formId).style.display = 'block';
}

// 隐藏表单
function hideForm(formId) {
  document.querySelector('#' + formId).style.display = 'none';
}

// 加入房间确认按钮点击事件处理
function joinRoom() {
  // 这里添加处理加入房间的逻辑
  // 可以获取输入框中的房间号，并执行相关操作
}

// 创建房间确认按钮点击事件处理
function createRoom() {
  // 这里添加处理创建房间的逻辑
  // 可以获取输入框中的房间号，并执行相关操作
}
