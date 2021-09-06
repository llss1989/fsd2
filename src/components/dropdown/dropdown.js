const dropdown = (elements, options) => {
  [...elements].map((el, index) => {
    const state = initState(options);
    state.id = index + 1;
    render(el, state);
    const buttonForCloseAndOpen = el.querySelector('.dropdown__windowButton');
    buttonForCloseAndOpen.addEventListener('click', () => {
      state.status = state.status === 'disabled' ? 'active' : 'disabled';
      render(el, state);
    });
  });
};

const initState = ({
  question, options, buttons, endings,
}) => {
  const state = {
    status: 'disabled',
    topic: question,
    generalValue: 0,
    valuesOfItemsMenu: [],
    listOfButtons: [],
    end: endings,
  };
  options.map((nameOfInput, index) => {
    state.valuesOfItemsMenu.push({ inputName: nameOfInput, value: 0, outputText: endings[index] });
  });
  buttons.map((button) => state.listOfButtons.push({
    nameButton: button,
    visible: !!(button === 'Применить'
    || state.generalValue > 0),
  }));

  return state;
};

const render = (el, state) => {
  const menu = el.querySelector('.dropdownMenu');
  if (state.status === 'disabled') {
    menu.classList.remove('dropdownMenu_active');
    menu.classList.add('dropdownMenu_disabled');
  }
  if (state.status === 'active') {
    menu.classList.remove('dropdownMenu_disabled');
    menu.classList.add('dropdownMenu_active');
  }
  createMenu(el, state);
  showDisplay(el, state);
};

const buildButtons = (el, state) => {
  const buttonsInner = document.createElement('div');
  buttonsInner.classList.add('dropdownMenuButtons');

  state.listOfButtons.map((inputState) => {
    const button = document.createElement('div');
    button.classList.add('dropdownMenuButtons__button');
    button.classList.add('dropdownMenuButtons__button_style');
    button.classList.add('dropdownMenu__item');
    if (inputState.visible === false) {
      button.classList.add('dropdownMenuButtons__button_disabled');
    }
    if (inputState.nameButton === 'Применить') {
      button.classList.add('dropdownMenuButtons__button_mr7');
      button.classList.add('dropdownMenuButtons__button_apply');

      button.addEventListener('click', () => {
        state.status = 'disabled';
        render(el, state);
      });
    }
    if (inputState.nameButton === 'Очистить') {
      button.classList.add('dropdownMenuButtons__button_ml15');
      button.classList.add('dropdownMenuButtons__button_clear');

      button.addEventListener('click', () => {
        state.valuesOfItemsMenu.map((itemState) => {
          itemState.value = 0;
        });
        inputState.visible = false;
        render(el, state);
      });
    }
    button.innerText = inputState.nameButton;
    buttonsInner.appendChild(button);
  });
  return buttonsInner;
};
const createMenu = (el, state) => {
  const resultOrAnswer = el.querySelector('.dropdown__window');
  const dropdownMenu = el.querySelector('.dropdownMenu');
  // const dropdownInner = document.createElement('div');
  // dropdownInner.classList.add('dropdownMenu__inner')
  resultOrAnswer.innerText = state.topic;
  el.dataset.id = state.id;

  dropdownMenu.innerHTML = '';
  state.valuesOfItemsMenu.map((inputState) => {
    const item = document.createElement('div');
    item.classList.add('dropdownMenu__item');

    const plusButton = document.createElement('div');
    plusButton.classList.add('dropdownMenu__plusButton');
    plusButton.innerText = '+';
    plusButton.addEventListener('click', (e) => {
      inputState.value += 1;
      state.generalValue += 1;
      if (state.generalValue > 0) {
        state.listOfButtons[0].visible = true;
      }
      render(el, state);
    });

    const minusButton = document.createElement('div');
    minusButton.classList.add('dropdownMenu__minusButton');
    minusButton.innerText = '-';
    minusButton.addEventListener('click', (e) => {
      inputState.value = inputState.value - 1 < 0 ? 0 : inputState.value - 1;
      state.generalValue = state.generalValue - 1 < 0 ? 0 : state.generalValue - 1;
      if (state.generalValue === 0) {
        state.listOfButtons[0].visible = false;
      }
      render(el, state);
    });

    const nameOfItem = document.createElement('div');
    nameOfItem.classList.add('dropdownMenu__item_nameOfItem');
    nameOfItem.innerText = inputState.inputName;

    const displayOfItem = document.createElement('span');
    displayOfItem.classList.add('dropdownMenu__display');
    displayOfItem.innerText = inputState.value;

    const innerButtons = document.createElement('div');
    innerButtons.classList.add('dropdownMenu__buttons');
    innerButtons.appendChild(minusButton);
    innerButtons.appendChild(displayOfItem);
    innerButtons.appendChild(plusButton);

    item.appendChild(nameOfItem);
    item.appendChild(innerButtons);

    dropdownMenu.appendChild(item);
  });
  if (state.listOfButtons.length > 0) {
    dropdownMenu.appendChild(buildButtons(el, state));
  }
  return dropdownMenu;
};

const showDisplay = (el, state) => {
  const display = el.querySelector('.dropdown__window');
  if (state.topic === 'Сколько гостей?') {
    const questsCount = state.valuesOfItemsMenu.reduce((acc, inputState, index) => {
      if (inputState.inputName === 'Взрослые' || inputState.inputName === 'Дети') {
        acc += inputState.value;
      }
      return acc;
    }, 0);
    const babyCount = state.valuesOfItemsMenu.reduce((acc, inputState) => {
      if (inputState.inputName === 'Младенцы') {
        acc += inputState.value;
      }
      return acc;
    }, 0);
    const questsText = questsCount === 0 ? '' : questsCount === 1 ? 'гость' : questsCount > 1
      && questsCount < 5 ? 'гостя' : 'гостей';
    const babyText = babyCount === 0 ? '' : babyCount === 1 ? 'младенец' : babyCount > 1
      && babyCount < 5 ? 'младенца' : 'младенцев';
    if (state.valuesOfItemsMenu[0].value === 0) {
      display.innerText = state.topic;
    } else {
      display.innerText = `${questsCount} ${questsText} ${babyCount === 0 ? '' : babyCount} ${babyText}`;
    }
  } else {
    const allValuesItem = state.valuesOfItemsMenu.reduce((acc, { value }) => {
      acc += value;
      return acc;
    }, 0);

    const text = state.valuesOfItemsMenu.reduce((acc, currentState) => {
      const currentTextShowDisplay = currentState.value === 0 ? '' : currentState.value === 1 ? currentState.outputText[0] : currentState.value > 1
        && currentState.value < 5 ? currentState.outputText[1] : currentState.outputText[2];
      acc.push(currentState.value === 0 ? ' ' : currentState.value, currentTextShowDisplay);
      return acc;
    }, []).join(' ');
    if (text.length > 23) {
      display.innerText = `${text.substr(0, 19)}...`;
    } else if (allValuesItem === 0) {
      display.innerText = state.topic;
    } else {
      display.innerText = text;
    }
  }
};

export default dropdown;
