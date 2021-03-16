var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        { className: "header_area" },
        React.createElement(
          "div",
          { className: "header_logo_area" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "header_logo clearfix" },
                React.createElement(
                  "div",
                  { className: "col-md-5 col-sm-3" },
                  React.createElement(
                    "div",
                    { className: "site_logo" },
                    React.createElement(
                      "a",
                      { href: "index.html" },
                      React.createElement("img", { src: "images/rt-transportes.svg", width: "160px", alt: "logo Resende Transportes" })
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-7 col-sm-9" },
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "header_top_service clearfix" },
                      React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4" },
                        React.createElement(
                          "div",
                          { className: "header_we_are clearfix" },
                          React.createElement(
                            "dl",
                            null,
                            React.createElement(
                              "dt",
                              null,
                              "We Are Here"
                            ),
                            React.createElement(
                              "dd",
                              null,
                              "Sydney  -  Australia"
                            )
                          ),
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/we-are-here.png", alt: "" })
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4" },
                        React.createElement(
                          "div",
                          { className: "header_we_are clearfix" },
                          React.createElement(
                            "dl",
                            null,
                            React.createElement(
                              "dt",
                              null,
                              "Contato"
                            ),
                            React.createElement(
                              "dd",
                              null,
                              React.createElement(
                                "a",
                                { href: "tel:1139837583" },
                                "(11) 3983-7583"
                              )
                            ),
                            React.createElement(
                              "dd",
                              null,
                              React.createElement(
                                "a",
                                { href: "tel:11947893570" },
                                "(11) 94789-3570"
                              )
                            )
                          ),
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/call-us-on.png", alt: "" })
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "col-md-4 col-sm-4" },
                        React.createElement(
                          "div",
                          { className: "header_we_are clearfix" },
                          React.createElement(
                            "dl",
                            null,
                            React.createElement(
                              "dt",
                              null,
                              "Hor\xE1rio de atendimento"
                            ),
                            React.createElement(
                              "dd",
                              null,
                              "09:00 \xE0s 18:00"
                            )
                          ),
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/we-are-open.png", alt: "" })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "header_bottom_area" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "main_menu" },
                React.createElement(
                  "nav",
                  { className: "navbar navbar-default" },
                  React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                      "button",
                      { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
                      React.createElement(
                        "span",
                        { className: "sr-only" },
                        "Toggle navigation"
                      ),
                      React.createElement("span", { className: "icon-bar" }),
                      React.createElement("span", { className: "icon-bar" }),
                      React.createElement("span", { className: "icon-bar" })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                    React.createElement(
                      "ul",
                      { className: "nav navbar-nav" },
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "/" },
                          "Home"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "sobre.html" },
                          "Sobre"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "regioes-atendidas.html" },
                          "Regi\xF5es atendidas"
                        )
                      ),
                      React.createElement(
                        "li",
                        { role: "presentation", className: "dropdown" },
                        React.createElement(
                          "a",
                          { id: "drop2", href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", role: "button", "aria-expanded": "false" },
                          "Contato"
                        ),
                        React.createElement(
                          "ul",
                          { id: "menu2", className: "dropdown-menu", role: "menu" },
                          React.createElement(
                            "li",
                            { role: "presentation" },
                            React.createElement(
                              "a",
                              { role: "menuitem", tabIndex: "-1", href: "contato.html" },
                              "Contato"
                            )
                          ),
                          React.createElement(
                            "li",
                            { role: "presentation" },
                            React.createElement(
                              "a",
                              { role: "menuitem", tabIndex: "-1", href: "index-two.html" },
                              "Trabalhe conosco"
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "contact.html" },
                          "Entre em Contato"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var domHeader = document.querySelector('#header');
ReactDOM.render(React.createElement(Header, null), domHeader);