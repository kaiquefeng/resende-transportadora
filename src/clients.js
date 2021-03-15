
class NossosClientes extends React.Component {
  render() {
    return (
      <section className="our_clients_area section-padding content-center">
			  <div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="section_title nice_title">
							<h4>Nossos Clientes</h4>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="logo_caro">
							<div className="client-carousel">
								<div className="item">
									<a href=""><img src="images/clients/cobasi.png" alt="Cobasi" /></a>
								</div>
								<div className="item">
									<a href=""><img src="images/clients/americanas.png" alt="Logo Image" /></a>
								</div>
								<div className="item">
									<a href=""><img src="images/clients/pao-de-acucar.png" alt="Logo Image" /></a>
								</div>
								<div className="item">
									<a href=""><img src="images/clients/marabraz.png" alt="Logo Image" /></a>
								</div>
								<div className="item">
									<a href=""><img src="images/clients/bauducco.jpeg" alt="Logo Image" /></a>
								</div>
								<div className="item">
									<a href=""><img src="images/clients/vicunha.jpeg" alt="Logo Image" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

let domNossosClientes = document.querySelector('#nossos-clientes')
ReactDOM.render(<NossosClientes />, domNossosClientes)