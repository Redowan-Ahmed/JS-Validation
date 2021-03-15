function lover(gf,bf,count) {
  const print = count;
  const data = document.querySelector('ol')
  const data2 = document.querySelector('ol.sec')
  for (let i = 1; i <= print; i++) {
    const love_you = 'I love You ';
    let lisec = document.createElement("li");
    lisec.className ='list-group-item';
    lisec.innerHTML = i+ '. ' + love_you + ' ' +'too' + ' ' + bf;
    data2.appendChild(lisec);

    let li1 = document.createElement("li");
    li1.className ='list-group-item';
    li1.innerHTML = i+ '. ' + love_you + gf;
    data.appendChild(li1);
  }
}
const getgfname = document.querySelector('input.gfname');
const getbfname = document.querySelector('input.bfname');
const getrangee = document.querySelector('input.getrange');
document.querySelector('a#submit').addEventListener('click',test);
function test() {
  if (getgfname.value && getbfname.value && getrangee.value && getrangee.value > 0 &&  getrangee.value <= 2000) {
    lover(getgfname.value ,getbfname.value ,getrangee.value );
    let reset = document.querySelector('a#submit');
    reset.remove();
    let reset2 = document.querySelector('a#reset');
    reset2.style.display = "block";
  }
} 
document.querySelector('a#reset').addEventListener('click',function() {
  window.location.reload();
})
function time() {
const date = new Date().toLocaleTimeString();
document.querySelector('span#time').innerHTML = date;
}
time()
setInterval(time, 1000);

(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      document.querySelector('a#submit').addEventListener('click', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})();
