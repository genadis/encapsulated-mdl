if (false === (gWindow === window)) {
  if ((typeof module === 'object') || (typeof define === 'function' && define.amd)) {
    var mdl = {};
    mdl.componentHandler = window.componentHandler;
    mdl.components = {};

    mdl.components.MaterialButton = window.MaterialButton;
    mdl.components.MaterialCheckbox = window.MaterialCheckbox;
    mdl.components.MaterialDataTable = window.MaterialDataTable;
    mdl.components.MaterialIconToggle = window.MaterialIconToggle;
    mdl.components.MaterialLayout = window.MaterialLayout;
    mdl.components.MaterialMenu = window.MaterialMenu;
    mdl.components.MaterialProgress = window.MaterialProgress;
    mdl.components.MaterialRadio = window.MaterialRadio;
    mdl.components.MaterialRipple = window.MaterialRipple;
    mdl.components.MaterialSlider = window.MaterialSlider;
    mdl.components.MaterialSnackbar = window.MaterialSnackbar;
    mdl.components.MaterialSpinner = window.MaterialSpinner;
    mdl.components.MaterialSwitch = window.MaterialSwitch;
    mdl.components.MaterialTabs = window.MaterialTabs;
    mdl.components.MaterialTextfield = window.MaterialTextfield;
    mdl.components.MaterialTooltip = window.MaterialTooltip;

    if (typeof module === 'object') {
      module.exports = mdl;
    }
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return mdl;
      });
    }
  } else {
    gWindow[vendor] = gWindow[vendor] || {};
    gWindow[vendor].mdl = window;
  }
}
