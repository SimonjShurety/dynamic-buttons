const container = document.querySelector('#container');
const animals = [
  { type: 'dog', isPet: true, name: 'Bob' },
  { type: 'cat', isPet: true, name: 'Joe' },
  { type: 'elephant', isPet: false, name: 'Herman' }
];

// uses the event.target to get the element that was just clicked
const handleClick = (event) => {
  // filter so we only do something when an actual button is clicked
  if (!event.target.matches('button')) return;

  console.log(event.target.petType);
};

animals
  .filter(animal => animal.isPet)
  .forEach(pet => {
    // create the button
    const button = document.createElement('button');

    // set the text to its name
    button.textContent = pet.name;

    // add to container
    container.appendChild(button);

    // set the petType on the button for use in the event handler
    button.petType = pet.type;
  });

container.addEventListener('click', handleClick);