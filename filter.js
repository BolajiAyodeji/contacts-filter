function filterNames(e) {
  let filterValue = filterInput.value.toLowerCase();

  let li = ul.querySelectorAll('li.collection-item');

  for(let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    }else {
      li[i].style.display = 'none';
    }
  }
  e.preventDefault();
}
