function addingEventListener() {
  const input = document.getElementById('input')
  input.addEventListener('click', function(event) {
    alert('First, find the element, then add the event listner')
  })
}