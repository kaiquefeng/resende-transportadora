var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Depoimentos = function (_React$Component) {
	_inherits(Depoimentos, _React$Component);

	function Depoimentos() {
		_classCallCheck(this, Depoimentos);

		return _possibleConstructorReturn(this, (Depoimentos.__proto__ || Object.getPrototypeOf(Depoimentos)).apply(this, arguments));
	}

	_createClass(Depoimentos, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"section",
				{ className: "all_testimonial_area  section-padding content-center" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "all_testimonial_container" },
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "col-md-6 col-md-offset-3" },
								React.createElement(
									"div",
									{ className: "section_title nice_title_white" },
									React.createElement(
										"h4",
										null,
										"Realize a cota\xE7\xE3o de transporte"
									),
									React.createElement(
										"p",
										null,
										"Conhe\xE7a os depoimentos de empresas e clientes satisfeitos"
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "container" },
								React.createElement(
									"div",
									{ className: "all_testimonial" },
									React.createElement(
										"div",
										{ className: "single_testi_slider" },
										React.createElement(
											"div",
											{ className: "testi_studient_txt" },
											React.createElement(
												"p",
												null,
												"Fui surpreendido pela economia e conforto no transporte dos alimentos, todos os fretes s\xE3o entregues sem preju\xEDzos \xE0s cargas."
											),
											React.createElement(
												"h3",
												null,
												"Mercado Salles"
											)
										)
									),
									React.createElement(
										"div",
										{ className: "single_testi_slider" },
										React.createElement(
											"div",
											{ className: "testi_studient_txt" },
											React.createElement(
												"p",
												null,
												"Minha mudan\xE7a foi bem tranquila, sucesso total. Todos os meus m\xF3veis estavam intactos."
											),
											React.createElement(
												"h3",
												null,
												"Patr\xEDcia Soares"
											)
										)
									),
									React.createElement(
										"div",
										{ className: "single_testi_slider" },
										React.createElement(
											"div",
											{ className: "testi_studient_txt" },
											React.createElement(
												"p",
												null,
												"Desde que resolvemos contar com a Resende Transporte, ficamos muito mais seguros em rela\xE7\xE3o a entregas dentro do prazo."
											),
											React.createElement(
												"h3",
												null,
												"Soft Dogs Pet Shop"
											)
										)
									),
									React.createElement(
										"div",
										{ className: "single_testi_slider" },
										React.createElement(
											"div",
											{ className: "testi_studient_txt" },
											React.createElement(
												"p",
												null,
												"Economia total. Estou muito satisfeito!"
											),
											React.createElement(
												"h3",
												null,
												"Pedro Afonso Pereira"
											)
										)
									)
								),
								React.createElement(
									"div",
									{ className: "testi_slider_nav" },
									React.createElement("i", { className: "fa fa-angle-left testi_prev" }),
									React.createElement("i", { className: "fa fa-angle-right testi_next" })
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Depoimentos;
}(React.Component);

var domDepoimentos = document.querySelector('#depoimentos');
ReactDOM.render(React.createElement(Depoimentos, null), domDepoimentos);