
class Depoimentos extends React.Component {
  render() {
    return (
      <section className="all_testimonial_area  section-padding content-center">
			<div className="container">
				<div className="all_testimonial_container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="section_title nice_title_white">
								<h4>Realize a cotação de transporte</h4>
								<p>
									Conheça os depoimentos de empresas e clientes satisfeitos
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="container">
							<div className="all_testimonial">
									<div className="single_testi_slider">
											<div className="testi_studient_txt">
												<p>Fui surpreendido pela economia e conforto no transporte dos alimentos, todos os fretes são entregues sem prejuízos às cargas.</p>
												<h3>Mercado Salles</h3>
											</div>
									</div>
									<div className="single_testi_slider">
											<div className="testi_studient_txt">
												<p>Minha mudança foi bem tranquila, sucesso total. Todos os meus móveis estavam intactos.</p>
												<h3>Patrícia Soares</h3>
											</div>
									</div>
									<div className="single_testi_slider">
										<div className="testi_studient_txt">
											<p>Desde que resolvemos contar com a Resende Transporte, ficamos muito mais seguros em relação a entregas dentro do prazo.</p>
											<h3>Soft Dogs Pet Shop</h3>
										</div>
								</div>
								<div className="single_testi_slider">
									<div className="testi_studient_txt">
										<p>Economia total. Estou muito satisfeito!</p>
										<h3>Pedro Afonso Pereira</h3>
									</div>
							</div>
							</div>
							<div className="testi_slider_nav">
									<i className="fa fa-angle-left testi_prev"></i>
									<i className="fa fa-angle-right testi_next"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

let domDepoimentos = document.querySelector('#depoimentos')
ReactDOM.render(<Depoimentos />, domDepoimentos)