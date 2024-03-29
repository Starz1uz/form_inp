let form = document.forms.namedItem('login');
let send_btn = form.querySelector('button');
let form_inp_name = form.querySelector('.inp_name');
let form_inp_age = form.querySelector('.inp_age');
let box = document.querySelector('.box');
let box_inner = box.querySelector('.inner');

form.onsubmit = (event) => {
    event.preventDefault();
    let count = 1

    let user = {
        id: count++,
        name: form_inp_name.value,
        age: 2024 - form_inp_age.value
    };

    if (user.name === '' || user.age === '') {
        alert('Something is getting wrong');
        return;
    }


    box.style.display = 'block';
    box_inner.innerHTML =
        `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    </tr> `;

    console.log(user);
};
