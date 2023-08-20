
        const list = document.querySelector('.list')
        const input = document.querySelector('.item_input')
        const addBtn = document.querySelector('.item_add')

        function itemAdd() {
                // 1. 사용자가 입력한 텍스트 받아오기
                const text = input.value;
                if (text == '') {
                        input.focus();
                        return
                }
                // 2. 새로운 아이템을 만듦 ( 텍스트 + 삭제 버튼 )
                const items = createItem(text)
                // 3. list 컨테이너안에 새로 만든 아이템을 추가한다.
                list.appendChild(items)
                // 4. 인풋을 초기화 한다.
                input.value = '';
                input.focus()
        }

        let id = 0; //UUID
        function createItem(text) {
                const item = document.createElement('li')
                item.setAttribute('class', 'item')
                
                item.innerHTML = `
                        <div class="items">
                                <span class="item_name">${text}</span>
                                <button class="item_delete" >
                                        <i class="fa-sharp fa-solid fa-delete-left" data-id=${id}></i>
                                </button>
                        </div>
                        <div class="line"></div>`
                id++;
                return item;

        }

        items.addEventListener('click', event=>{
                const id = event.target.dataset.id
                if(id){
                        const delete = document.querySelector('');
                        delete.remove();
                }
        })

        addBtn.addEventListener('click', function () {
                itemAdd();
        })