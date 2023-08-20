// const list = document.querySelector('.list'); // ul
// const input = document.querySelector('.item_input'); //  input 텍스트
// const addBtn = document.querySelector('.item_add'); // 추가 버튼

// function onAdd() {
//         // 1. 사용자가 입력한 텍스트를 받아옴
//         const text = input.value;
//         if (text == "") {
//                 input.focus();
//                 return;
//         }



//                 // 2. 새로운 아이템을 만듦 ( 텍스트 + 삭제 버튼 )
//                 const items = createItem(text);
//                 // 3. list 컨테이너안에 새로 만든 아이템을 추가한다.
//                 list.appendChild(items);
//                 // 4. 새로 추가된 아이템으로 스크롤링
//                 items.scrollIntoView();
//                 // 5. 인풋을 초기화 한다.
//                 input.value = '';
//                 input.focus();
        
// }

// function createItem(text) {
//         const item = document.createElement('li');
//         item.setAttribute('class', 'item')

//         const items = document.createElement('div');
//         items.setAttribute('class', 'items')

//         const name = document.createElement('span');
//         name.setAttribute('class', 'item_name')
//         name.innerHTML = text;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.setAttribute('class', 'item_delete');
//         deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-delete-left"></i>'
//         deleteBtn.addEventListener('click', () => {
//                 list.removeChild(item)
//         });

//         const line = document.createElement('div');
//         line.setAttribute('class', 'line');

//         items.appendChild(name);
//         items.appendChild(deleteBtn);

//         item.appendChild(items);
//         item.appendChild(line);
//         return item;





// }
// addBtn.addEventListener('click', function () {
//         onAdd();
// })
// input.addEventListener('keypress', event => {
//         if (event.key == 'Enter') {
//                 onAdd();
//         }
// });







        const list = document.querySelector('.list')
        const input = document.querySelector('.item_input')
        const addBtn = document.querySelector('.item_add')

        function itemAdd(){
        // 1. 사용자가 입력한 텍스트 받아오기
        const text = input.value;
        if(text == ''){
                input.focus();
                return
        }
        // 2. 새로운 아이템을 만듦 ( 텍스트 + 삭제 버튼 )
        const items = createItem(text)
        // 3. list 컨테이너안에 새로 만든 아이템을 추가한다.
        list.appendChild(items)
        // 4. 인풋을 초기화 한다.
        input.value= '';
        input.focus()
        }


        function createItem(text){
                const item = document.createElement('li')
                item.setAttribute('class', 'item')

                const items = document.createElement('div')
                items.setAttribute('class', 'items')

                const name = document.createElement('span')
                name.setAttribute('class', 'item_name')
                name.innerText = text;

                const deleteBtn = document.createElement('button')
                deleteBtn.setAttribute('class', 'item_delete')
                deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-delete-left"></i>`
                deleteBtn.addEventListener('click', function(){
                        list.removeChild(item)
                })

                const line = document.createElement('div')
                line.setAttribute('class', 'line')

                item.appendChild(items)
                item.appendChild(line)

                items.appendChild(name)
                items.appendChild(deleteBtn)

                return item;
                
        }


addBtn.addEventListener('click', function () {
        itemAdd();
})