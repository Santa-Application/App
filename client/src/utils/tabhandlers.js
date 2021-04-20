// Either focus the next, previous, first, or last tab
// depending on key pressed

const keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  enter: 13,
  space: 32
};

// Add or subtract depending on key pressed
const direction = {
  37: -1,
  38: -1,
  39: 1,
  40: 1
};

const switchTabOnArrowPress = event => {
  var pressed = event.keyCode;

  if (direction[pressed]) {
    const target = event.target;
    if (target.index !== undefined) {
      if (tabs[target.index + direction[pressed]]) {
        tabs[target.index + direction[pressed]].focus();
      }
      else if (pressed === keys.left || pressed === keys.up) {
        focusLastTab();
      }
      else if (pressed === keys.right || pressed == keys.down) {
        focusFirstTab();
      };
    };
  };
};

// Activates any given tab panel
const activateTab = (tab, setFocus) => {
  setFocus = setFocus || true;
  // Deactivate all other tabs
  deactivateTabs();

  // Remove tabindex attribute
  tab.removeAttribute('tabindex');

  // Set the tab as selected
  tab.setAttribute('aria-selected', 'true');

  // Get the value of aria-controls (which is an ID)
  var controls = tab.getAttribute('aria-controls');

  // Remove hidden attribute from tab panel to make it visible
  document.getElementById(controls).removeAttribute('hidden');

  // Set focus when required
  if (setFocus) {
    tab.focus();
  };
};

// Make a guess
function focusFirstTab () {
  tabs[0].focus();
};

// Make a guess
function focusLastTab () {
  tabs[tabs.length - 1].focus();
};