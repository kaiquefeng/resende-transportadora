var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cotacao = function (_React$Component) {
  _inherits(Cotacao, _React$Component);

  function Cotacao() {
    _classCallCheck(this, Cotacao);

    return _possibleConstructorReturn(this, (Cotacao.__proto__ || Object.getPrototypeOf(Cotacao)).apply(this, arguments));
  }

  _createClass(Cotacao, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { "class": "get_quote_area content-left" },
        React.createElement(
          "div",
          { "class": "container" },
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "col-md-6" },
              React.createElement(
                "div",
                { "class": "section_title nice_title_white_left" },
                React.createElement(
                  "h4",
                  null,
                  "COTA\xC7\xC3O"
                ),
                React.createElement(
                  "p",
                  null,
                  "Seu frete est\xE1 em boas m\xE3os."
                )
              )
            )
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "section_content" },
              React.createElement(
                "div",
                { "class": "col-md-7" },
                React.createElement(
                  "div",
                  { "class": "row" },
                  React.createElement(
                    "form",
                    { action: "index.html" },
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "text", placeholder: "Nome do respons\xE1vel" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "text", placeholder: "Local de coleta da carga" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "text", placeholder: "Local de entrega da carga" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "text", placeholder: "Peso" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "text", placeholder: "Tamanho" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group col-md-6 col-sm-6" },
                      React.createElement(
                        "div",
                        { "class": "input-group" },
                        React.createElement("input", { type: "date", placeholder: "Data" })
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "form-group submit col-md-3 col-sm-3" },
                      React.createElement("input", { "class": "btn", type: "submit", value: "Enviar" })
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

  return Cotacao;
}(React.Component);

var domCotacao = document.querySelector('#cotacao');
ReactDOM.render(React.createElement(Cotacao, null), domCotacao);