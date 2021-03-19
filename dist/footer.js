var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "footer",
        { className: "footer_area" },
        React.createElement(
          "div",
          { className: "footer_top_area" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "footer_top_up" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "footer_widgets" },
                  React.createElement(
                    "div",
                    { className: "col-md-4 col-sm-6" },
                    React.createElement(
                      "div",
                      { className: "single_footer_widgets margin-top-95" },
                      React.createElement(
                        "h4",
                        { className: "widget_title" },
                        "contato"
                      ),
                      React.createElement(
                        "ul",
                        { className: "address_list" },
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/map-location.png", alt: "" })
                          ),
                          React.createElement(
                            "dl",
                            null,
                            React.createElement(
                              "dt",
                              null,
                              "Endere\xE7o"
                            ),
                            React.createElement(
                              "dd",
                              null,
                              "Av. Queiroz Filho, 1700"
                            )
                          )
                        ),
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/mobile-icon.png", alt: "" })
                          ),
                          React.createElement(
                            "dl",
                            null,
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
                          )
                        ),
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "i",
                            null,
                            React.createElement("img", { src: "images/message-icon.png", alt: "" })
                          ),
                          React.createElement(
                            "dl",
                            null,
                            React.createElement(
                              "dd",
                              null,
                              "contato@resendetransportes.com.br"
                            )
                          )
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-md-3 hidden-sm" },
                    React.createElement(
                      "div",
                      { className: "single_footer_widgets margin-top-95" },
                      React.createElement(
                        "h4",
                        { className: "widget_title" },
                        "Sobre"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "A Resende Transportadora realiza a sua entrega de maneira \xE1gil, resguardada e inteligente. Nossa log\xEDstica busca criar rotas seguras, econ\xF4micas e confort\xE1veis para o frete dos mais diversos tipos de objetos, cargas e carregamentos."
                      ),
                      React.createElement(
                        "ul",
                        { className: "footer_social_icons" },
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { className: "fa fa-facebook" })
                          )
                        ),
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { className: "fa fa-google-plus" })
                          )
                        ),
                        React.createElement(
                          "li",
                          null,
                          React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { className: "fa fa-linkedin" })
                          )
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-2 col-sm-6" },
                  React.createElement(
                    "div",
                    { className: "single_footer_widgets margin-top-95" },
                    React.createElement(
                      "h4",
                      { className: "widget_title" },
                      "Ind\xFAstria e suporte"
                    ),
                    React.createElement(
                      "ul",
                      { className: "industry_support" },
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Home"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Sobre"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Regi\xF5es atendidas"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Contato"
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Trabalhe conosco"
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-3 hidden-sm hidden-xs" },
                  React.createElement(
                    "div",
                    { className: "single_footer_widgets" },
                    React.createElement("img", { src: "images/rt-transportes-branco.svg", alt: "footer logo" }),
                    React.createElement(
                      "ul",
                      { "class": "footer_copyright" },
                      React.createElement(
                        "li",
                        null,
                        "Copyright \xA9 ",
                        React.createElement(
                          "a",
                          { href: "#" },
                          "Resende Transportadora."
                        )
                      ),
                      React.createElement(
                        "li",
                        null,
                        "Todos os direitos reservados. 2021"
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

  return Footer;
}(React.Component);

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(Footer, null), domContainer);