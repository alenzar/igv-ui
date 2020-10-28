function embedCSS() {

    var css =  '.igv-ui-popover {\n  cursor: default;\n  position: absolute;\n  z-index: 2048;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 1px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  background-color: white; }\n  .igv-ui-popover > div:first-child {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-popover > div:first-child > div {\n      margin-right: 4px;\n      height: 12px;\n      width: 12px;\n      color: #7F7F7F; }\n    .igv-ui-popover > div:first-child > div:hover {\n      color: #444; }\n  .igv-ui-popover > div:last-child {\n    overflow-y: auto;\n    max-height: 400px;\n    background-color: white; }\n    .igv-ui-popover > div:last-child > div {\n      max-width: 200px;\n      overflow-x: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n      .igv-ui-popover > div:last-child > div > span {\n        font-weight: bolder; }\n    .igv-ui-popover > div:last-child hr {\n      width: 100%; }\n\n.igv-ui-alert-dialog-container {\n  box-sizing: content-box;\n  position: absolute;\n  z-index: 2048;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 200px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  outline: none;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center; }\n  .igv-ui-alert-dialog-container > div:first-child {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-alert-dialog-container > div:first-child div:first-child {\n      padding-left: 8px; }\n  .igv-ui-alert-dialog-container #igv-ui-alert-dialog-body {\n    color: #373737;\n    width: 100%;\n    height: calc(100% - 24px - 64px);\n    overflow-y: scroll; }\n    .igv-ui-alert-dialog-container #igv-ui-alert-dialog-body #igv-ui-alert-dialog-body-copy {\n      cursor: pointer;\n      margin: 16px;\n      width: auto;\n      height: auto;\n      overflow-wrap: break-word;\n      word-break: break-word;\n      background-color: white;\n      border: unset; }\n  .igv-ui-alert-dialog-container > div:last-child {\n    width: 100%;\n    margin-bottom: 10px;\n    background-color: white;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center; }\n    .igv-ui-alert-dialog-container > div:last-child div {\n      margin: unset;\n      width: 40px;\n      height: 30px;\n      line-height: 30px;\n      text-align: center;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: small;\n      font-weight: 400;\n      border-color: #2B81AF;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 4px;\n      background-color: #2B81AF; }\n    .igv-ui-alert-dialog-container > div:last-child div:hover {\n      cursor: pointer;\n      border-color: #25597f;\n      background-color: #25597f; }\n\n.igv-ui-color-swatch {\n  box-sizing: content-box;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: white;\n  border-radius: 4px; }\n\n.igv-ui-colorpicker-menu-close-button {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 32px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  padding-right: 8px; }\n  .igv-ui-colorpicker-menu-close-button i.fa {\n    display: block;\n    margin-left: 4px;\n    margin-right: 4px;\n    color: #5f5f5f; }\n  .igv-ui-colorpicker-menu-close-button i.fa:hover,\n  .igv-ui-colorpicker-menu-close-button i.fa:focus,\n  .igv-ui-colorpicker-menu-close-button i.fa:active {\n    cursor: pointer;\n    color: #0f0f0f; }\n\n.igv-ui-generic-dialog-container {\n  box-sizing: content-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 200px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  z-index: 2048;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header div {\n      margin-right: 4px;\n      margin-bottom: 2px;\n      height: 12px;\n      width: 12px;\n      color: #7F7F7F; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header div:hover {\n      cursor: pointer;\n      color: #444; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-one-liner {\n    color: #373737;\n    width: 95%;\n    height: 24px;\n    line-height: 24px;\n    text-align: left;\n    margin-top: 8px;\n    padding-left: 8px;\n    overflow-wrap: break-word;\n    background-color: white; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input {\n    margin-top: 8px;\n    width: 95%;\n    height: 24px;\n    color: #373737;\n    line-height: 24px;\n    padding-left: 8px;\n    background-color: white;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input div {\n      width: 30%;\n      height: 100%;\n      font-size: 16px;\n      text-align: right;\n      padding-right: 8px;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input input {\n      display: block;\n      height: 100%;\n      width: 100%;\n      padding-left: 4px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 400;\n      color: #373737;\n      text-align: left;\n      outline: none;\n      border-style: solid;\n      border-width: thin;\n      border-color: #7F7F7F;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input input {\n      width: 50%;\n      font-size: 16px; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input {\n    margin-top: 8px;\n    width: calc(100% - 16px);\n    height: 24px;\n    color: #373737;\n    line-height: 24px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input input {\n      display: block;\n      height: 100%;\n      width: 100%;\n      padding-left: 4px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 400;\n      color: #373737;\n      text-align: left;\n      outline: none;\n      border-style: solid;\n      border-width: thin;\n      border-color: #7F7F7F;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input input {\n      font-size: 16px; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel {\n    width: 100%;\n    height: 28px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div {\n      margin-top: 32px;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      width: 75px;\n      height: 28px;\n      line-height: 28px;\n      text-align: center;\n      border-color: transparent;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 2px; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:first-child {\n      margin-left: 32px;\n      margin-right: 0;\n      background-color: #5ea4e0; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:last-child {\n      margin-left: 0;\n      margin-right: 32px;\n      background-color: #c4c4c4; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:first-child:hover {\n      cursor: pointer;\n      background-color: #3b5c7f; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:last-child:hover {\n      cursor: pointer;\n      background-color: #7f7f7f; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok {\n    width: 100%;\n    height: 36px;\n    margin-top: 32px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok div {\n      width: 98px;\n      height: 36px;\n      line-height: 36px;\n      text-align: center;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: medium;\n      font-weight: 400;\n      border-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 4px;\n      background-color: #2B81AF; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok div:hover {\n      cursor: pointer;\n      background-color: #25597f; }\n\n.igv-ui-generic-container {\n  box-sizing: content-box;\n  position: absolute;\n  z-index: 2048;\n  background-color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .igv-ui-generic-container div:first-child {\n    cursor: move;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    height: 24px;\n    width: 100%;\n    background-color: #dddddd; }\n    .igv-ui-generic-container div:first-child div {\n      display: block;\n      color: #5f5f5f;\n      cursor: pointer;\n      width: 14px;\n      height: 14px;\n      margin-right: 8px;\n      margin-bottom: 4px; }\n\n.igv-ui-dialog {\n  z-index: 2048;\n  position: fixed;\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  background-color: white;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400; }\n  .igv-ui-dialog .igv-ui-dialog-header {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-dialog .igv-ui-dialog-header div {\n      margin-right: 4px;\n      margin-bottom: 2px;\n      height: 12px;\n      width: 12px;\n      color: #7F7F7F; }\n    .igv-ui-dialog .igv-ui-dialog-header div:hover {\n      cursor: pointer;\n      color: #444; }\n  .igv-ui-dialog .igv-ui-dialog-one-liner {\n    width: 95%;\n    height: 24px;\n    line-height: 24px;\n    text-align: left;\n    margin: 8px;\n    overflow-wrap: break-word;\n    background-color: white;\n    font-weight: bold; }\n  .igv-ui-dialog .igv-ui-dialog-ok-cancel {\n    width: 100%;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-dialog .igv-ui-dialog-ok-cancel div {\n      margin: 16px;\n      margin-top: 32px;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      width: 75px;\n      height: 28px;\n      line-height: 28px;\n      text-align: center;\n      border-color: transparent;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 2px; }\n    .igv-ui-dialog .igv-ui-dialog-ok-cancel div:first-child {\n      background-color: #5ea4e0; }\n    .igv-ui-dialog .igv-ui-dialog-ok-cancel div:last-child {\n      background-color: #c4c4c4; }\n    .igv-ui-dialog .igv-ui-dialog-ok-cancel div:first-child:hover {\n      cursor: pointer;\n      background-color: #3b5c7f; }\n    .igv-ui-dialog .igv-ui-dialog-ok-cancel div:last-child:hover {\n      cursor: pointer;\n      background-color: #7f7f7f; }\n  .igv-ui-dialog .igv-ui-dialog-ok {\n    width: 100%;\n    height: 36px;\n    margin-top: 32px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-dialog .igv-ui-dialog-ok div {\n      width: 98px;\n      height: 36px;\n      line-height: 36px;\n      text-align: center;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: medium;\n      font-weight: 400;\n      border-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 4px;\n      background-color: #2B81AF; }\n    .igv-ui-dialog .igv-ui-dialog-ok div:hover {\n      cursor: pointer;\n      background-color: #25597f; }\n\n.igv-ui-panel, .igv-ui-panel-column, .igv-ui-panel-row {\n  z-index: 2048;\n  background-color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.igv-ui-panel-column {\n  display: flex;\n  flex-direction: column; }\n\n.igv-ui-panel-row {\n  display: flex;\n  flex-direction: row; }\n\n.igv-ui-textbox {\n  background-color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n/*# sourceMappingURL=igv-ui.css.map */\n';

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;

    document.head.insertBefore(style, document.head.childNodes[ document.head.childNodes.length - 1 ]);

}

export default embedCSS
