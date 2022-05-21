let i = 0;

const addContent = () => {
  const input = document.querySelector('.message-input');
  const messageSection = document.querySelector('.message-section');
  // creating elements
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const label = document.createElement('label');
  const btn = document.createElement('button');

  i = i + 30;
  // adding content
  label.innerText = input.value;
  btn.innerHTML = 'Reply';
  div1.style.textIndent = `${i}px`;

  // aplying attribute
  div.setAttribute('class', 'message-div');
  div1.setAttribute('class', 'message-content');
  btn.setAttribute('class', 'reply-button');
  btn.setAttribute('onclick', 'addContent()');

  div1.append(label);
  div2.append(btn);
  div.append(div1, div2);
  messageSection.append(div);
  input.value = '';
};
