const messageSection = document.querySelector('.message-section');
const input = document.querySelector('.message-input');

const div = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const btn = document.createElement('button');
const label = document.createElement('label');

label.innerText = 'Hello Everyone';
btn.innerHTML = 'Reply';

div.setAttribute('class', 'message-div');
div1.setAttribute('class', 'message-content');
btn.setAttribute('class', 'reply-button');
btn.style.padding = '5px 15px';

div1.append(label);
div2.append(btn);
div.append(div1, div2);
messageSection.append(div);

let i = 0;

btn.addEventListener('click', () => {
  btn.removeAttribute('class');
  if (input.value == '') {
    alert('Enter message first!!');
  } else {
    // creating elements
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const label = document.createElement('label');
    const btn1 = document.createElement('button');

    i = i + 30;
    // adding content
    label.innerText = input.value;
    btn1.innerHTML = 'Reply';
    div1.style.textIndent = `${i}px`;

    // aplying attribute
    div.setAttribute('class', 'message-div');
    div1.setAttribute('class', 'message-content');
    btn1.setAttribute('class', 'reply-button');

    div1.append(label);
    div2.append(btn);
    div.append(div1, div2);
    messageSection.append(div);
  }
  input.value = '';
});
