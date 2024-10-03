const myButton = document.querySelector('button');
 
myButton.addEventListener('click', () => {
  const data = myButton.getAttribute('data-id'); 
  console.log(data);

  if(myButton.classList.contains('liked')) {
    myButton.classList.remove('liked');
    myButton.innerHTML = 'like';
  } else {
    myButton.classList.add('liked');
    myButton.innerHTML = 'Remove like';
  }

  
});

