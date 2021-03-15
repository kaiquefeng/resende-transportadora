var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NossosClientes = function (_React$Component) {
	_inherits(NossosClientes, _React$Component);

	function NossosClientes() {
		_classCallCheck(this, NossosClientes);

		return _possibleConstructorReturn(this, (NossosClientes.__proto__ || Object.getPrototypeOf(NossosClientes)).apply(this, arguments));
	}

	_createClass(NossosClientes, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"section",
				{ className: "our_clients_area section-padding content-center" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-md-6 col-md-offset-3" },
							React.createElement(
								"div",
								{ className: "section_title nice_title" },
								React.createElement(
									"h4",
									null,
									"Nossos Clientes"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-md-12 col-sm-12 col-xs-12" },
							React.createElement(
								"div",
								{ className: "logo_caro" },
								React.createElement(
									"div",
									{ className: "client-carousel" },
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/cobasi.png", alt: "Cobasi" })
										)
									),
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/americanas.png", alt: "Logo Image" })
										)
									),
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/pao-de-acucar.png", alt: "Logo Image" })
										)
									),
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/marabraz.png", alt: "Logo Image" })
										)
									),
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/bauducco.jpeg", alt: "Logo Image" })
										)
									),
									React.createElement(
										"div",
										{ className: "item" },
										React.createElement(
											"a",
											{ href: "" },
											React.createElement("img", { src: "images/clients/vicunha.jpeg", alt: "Logo Image" })
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

	return NossosClientes;
}(React.Component);

var domNossosClientes = document.querySelector('#nossos-clientes');
ReactDOM.render(React.createElement(NossosClientes, null), domNossosClientes);