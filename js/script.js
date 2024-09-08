const showmore = document.getElementById('showmore');
showmore.addEventListener('click', () => {
    const newcard = document.createElement('div');
    newcard.classList.add('content');
    newcard.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="../img/Medicamento 2.png" class="card-img-top" alt="Medicamento 2">
        <div class="card-body">
          <p class="card-text">Medicamento para dolores de cualquier tipo.</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../img/Medicamento 5.png" class="card-img-top" alt="Medicamento 5">
        <div class="card-body">
          <p class="card-text">Medicamento antibiótico para infecciones bacterianas.</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../img/Medicamento B2.png" class="card-img-top" alt="Medicamento B2">
        <div class="card-body">
          <p class="card-text">Medicamento para la acidez estomacal.</p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../img/Medicamento B3.png" class="card-img-top" alt="Medicamento B3">
        <div class="card-body">
          <p class="card-text">Medicamento para disminuir el cansancio mental.</p>
        </div>
      </div>
    `;
    document.getElementById('cards').appendChild(newcard);

    const repbutton = document.createElement('div');
    repbutton.classList.add('newbutton');
    repbutton.innerHTML = `
        <button id="showless">Ocultar productos destacados</button>
    `;

    document.getElementById('buttons').appendChild(repbutton);
    
    showmore.remove();

    document.getElementById('showless').addEventListener('click', () => {

        const repbutton2 = document.createElement('div');
        repbutton2.classList.add('newbutton2');
        repbutton2.innerHTML = `
        <button id="showmore">Mostrar productos destacados</button>
        `;

        document.getElementById('buttons').appendChild(repbutton2);

        const buttonEliminator = document.getElementById('showless')

        buttonEliminator.remove();

        newcard.remove();
        
    });

});

const changecolor = document.getElementById('color-selector')
      colorChalenger = document.getElementById('formimage');

changecolor.addEventListener('input', ()=>{
    let color = changecolor.value;
    colorChalenger.style.borderColor = color;
});