const mlt = {
    name: 'mlt',
    rooms: [1,2,3,4,5],
}

const nursing = {
    name: 'nursing',
    rooms: [1,2,],
}

const ct = {
    name: 'ct',
    rooms: [1,2,3,4],
}

const ht = {
    name: 'ht',
    rooms: [1,2,3,4],
}

const blocks = [mlt, ct, ht, nursing];



/////////////////////////////
// DISPLAY BLOCKS
const containerBlock = document.querySelector('.cards');

const displayBlock = function(blc) {
    
    blc.forEach(function(bl) {
        const html = `
        <div class="card-single" id=${bl.name}>
            <div>
                <h1>${bl.name}</h1>
                <span>Block</span>
            </div>
            <div>
                <span class=""></span>
            </div>
        </div>       
        `;

        containerBlock.insertAdjacentHTML('afterbegin', html);
    });
};

displayBlock(blocks);

//////////////////////
// CHANGE ACTIVE BLOCK

const block = document.querySelectorAll('.card-single');

const removeActive = function() {
    block.forEach(bl => {
        if (bl.classList.contains('active-block'))
            bl.classList.remove('active-block');
    })
};

block.forEach(bl => {
    bl.addEventListener('click', () => {
        removeActive(); 
        


        bl.classList.add('active-block');

        console.log(document.querySelector(`#`));
    })
});


/////////////////////////////
// DISPLAY ROOMS
const containerRooms = document.querySelector('.container-room');

const displayRooms = function(block) {

    block.forEach((bl) => {
        bl.rooms.forEach(rm => {
            const html = `
            <tr>
                <td>${bl.name} ${rm}</td>
                <td><span class="status green"></span>
                    <span>Available</span>
                </td>
                <td><button class="btn-book">Book</button></td>
            </tr>        
            `;

            containerRooms.insertAdjacentHTML('beforeend', html)            
        })
    })
}
displayRooms(blocks);













////////////////////////////////
// DISPLAYING INPUT FORM
const input = document.querySelectorAll('.modal__form--input');
const form = document.querySelector('.modal__form');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn-book');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    input.forEach(el => el.value = '');
}

form.addEventListener('submit', closeModal);

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});