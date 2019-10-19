const httpMessages =
    {
        "401": "Access unauthorized",
        "403": "Access forbidden",
        "404": "Not found"
    };


const AlertDialog = function (parent) {

    const self = this;

    // container
    this.container = div({class: "igv-ui-alert-dialog-container"});
    parent.appendChild(this.container);

    // header
    let header = document.createElement("div");
    this.container.appendChild(header);

    // body container
    let div = div({id: 'igv-ui-alert-dialog-body'});
    this.container.appendChild(div);

    // body copy
    this.body = div({id: 'igv-ui-alert-dialog-body-copy'});
    div.appendChild(this.body);

    // ok container
    let ok_container = div();
    this.container.appendChild(ok_container);

    // ok
    this.ok = div();
    ok_container.appendChild(this.ok);
    this.ok.textContent = 'OK';
    this.ok.addEventListener('click', function (ev) {
        if (typeof self.callback === 'function') {
            self.callback("OK");
            self.callback = undefined;
        }
        self.body.innerHTML = '';
        hide(self.container.style.display );
    });

    hide(this.container);
};

AlertDialog.prototype.present = function (alert, callback) {
    let string = alert.message || alert;
    if (httpMessages.hasOwnProperty(string)) {
        string = httpMessages[string];
    }
    this.body.innerHTML = string;
    this.callback = callback;
    show(this.container);
};

function embedCSS() {

    var css =  '.igv-ui-alert-dialog-container {\n  position: absolute;\n  z-index: 2048;\n  top: 50%;\n  left: 50%;\n  margin: -150px 0 0 -150px;\n  width: 300px;\n  height: 256px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  z-index: 2048;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .igv-ui-alert-dialog-container div:first-child {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-alert-dialog-container div:first-child div {\n      margin-right: 4px;\n      margin-bottom: 2px;\n      height: 12px;\n      width: 12px;\n      color: #7F7F7F; }\n    .igv-ui-alert-dialog-container div:first-child div:hover {\n      cursor: pointer;\n      color: #444; }\n  .igv-ui-alert-dialog-container #igv-ui-alert-dialog-body {\n    color: #373737;\n    width: 100%;\n    height: calc(100% - 24px - 64px);\n    overflow-y: scroll; }\n    .igv-ui-alert-dialog-container #igv-ui-alert-dialog-body #igv-ui-alert-dialog-body-copy {\n      cursor: pointer;\n      margin: 16px;\n      width: auto;\n      height: auto;\n      overflow-wrap: break-word;\n      word-break: break-word;\n      background-color: white;\n      border: unset; }\n  .igv-ui-alert-dialog-container div:last-child {\n    width: 100%;\n    height: 64px;\n    background-color: white;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center; }\n    .igv-ui-alert-dialog-container div:last-child div {\n      width: 98px;\n      height: 36px;\n      line-height: 36px;\n      text-align: center;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: medium;\n      font-weight: 400;\n      border-color: #2B81AF;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 4px;\n      background-color: #2B81AF; }\n    .igv-ui-alert-dialog-container div:last-child div:hover {\n      cursor: pointer;\n      border-color: #25597f;\n      background-color: #25597f; }\n\n.igv-ui-generic-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 200px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  z-index: 2048;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    cursor: move;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-color: #7F7F7F;\n    border-bottom-style: solid;\n    border-bottom-width: thin;\n    background-color: #eee; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header div {\n      margin-right: 4px;\n      margin-bottom: 2px;\n      height: 12px;\n      width: 12px;\n      color: #7F7F7F; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-header div:hover {\n      cursor: pointer;\n      color: #444; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-one-liner {\n    color: #373737;\n    width: 95%;\n    height: 24px;\n    line-height: 24px;\n    text-align: left;\n    margin-top: 8px;\n    padding-left: 8px;\n    overflow-wrap: break-word;\n    background-color: white; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input {\n    margin-top: 8px;\n    width: 95%;\n    height: 24px;\n    color: #373737;\n    line-height: 24px;\n    padding-left: 8px;\n    background-color: white;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input div {\n      width: 30%;\n      height: 100%;\n      font-size: 16px;\n      text-align: right;\n      padding-right: 8px;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input input {\n      display: block;\n      height: 100%;\n      width: 100%;\n      padding-left: 4px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 400;\n      color: #373737;\n      text-align: left;\n      outline: none;\n      border-style: solid;\n      border-width: thin;\n      border-color: #7F7F7F;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-label-input input {\n      width: 50%;\n      font-size: 16px; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input {\n    margin-top: 8px;\n    width: calc(100% - 16px);\n    height: 24px;\n    color: #373737;\n    line-height: 24px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input input {\n      display: block;\n      height: 100%;\n      width: 100%;\n      padding-left: 4px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 400;\n      color: #373737;\n      text-align: left;\n      outline: none;\n      border-style: solid;\n      border-width: thin;\n      border-color: #7F7F7F;\n      background-color: white; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-input input {\n      font-size: 16px; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel {\n    width: 100%;\n    height: 28px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div {\n      margin-top: 32px;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: 14px;\n      font-weight: 400;\n      width: 75px;\n      height: 28px;\n      line-height: 28px;\n      text-align: center;\n      border-color: transparent;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 2px; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:first-child {\n      margin-left: 32px;\n      margin-right: 0;\n      background-color: #5ea4e0; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:last-child {\n      margin-left: 0;\n      margin-right: 32px;\n      background-color: #c4c4c4; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:first-child:hover {\n      cursor: pointer;\n      background-color: #3b5c7f; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok-cancel div:last-child:hover {\n      cursor: pointer;\n      background-color: #7f7f7f; }\n  .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok {\n    width: 100%;\n    height: 36px;\n    margin-top: 32px;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok div {\n      width: 98px;\n      height: 36px;\n      line-height: 36px;\n      text-align: center;\n      color: white;\n      font-family: \"Open Sans\", sans-serif;\n      font-size: medium;\n      font-weight: 400;\n      border-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-radius: 4px;\n      background-color: #2B81AF; }\n    .igv-ui-generic-dialog-container .igv-ui-generic-dialog-ok div:hover {\n      cursor: pointer;\n      background-color: #25597f; }\n\n/*# sourceMappingURL=igv-ui.css.map */\n';

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;

    document.head.insertBefore(style, document.head.childNodes[ document.head.childNodes.length - 1 ]);

}

embedCSS();

export { AlertDialog };
