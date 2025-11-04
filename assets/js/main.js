
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));
  const toast = document.getElementById('helloToast');
  if (toast) bootstrap.Toast.getOrCreateInstance(toast).show();
});
