document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // 阻止表单默认提交
  alert("谢谢！你的消息已收到，我会尽快回复。");
  this.reset(); // 清空表单
});