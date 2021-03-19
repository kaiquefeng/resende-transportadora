
class Footer extends React.Component {
  render() {

    return (
      <footer className="footer_area">
        <div className="footer_top_area">
          <div className="container">
            <div className="footer_top_up">
              <div className="row">
                <div className="footer_widgets">
                  <div className="col-md-4 col-sm-6">
                    <div className="single_footer_widgets margin-top-95">
                      <h4 className="widget_title">contato</h4>
                      <ul className="address_list">
                        <li>
                          <i><img src="images/map-location.png" alt=""/></i>
                          <dl>
                            <dt>Endereço</dt>
                            <dd>Av. Queiroz Filho, 1700</dd>
                          </dl>
                        </li>
                        <li>
                          <i><img src="images/mobile-icon.png" alt=""/></i>
                          <dl>
                            <dd><a href="tel:1139837583">(11) 3983-7583</a></dd>
                            <dd><a href="tel:11947893570">(11) 94789-3570</a></dd>
                          </dl>
                        </li>
                        <li>
                          <i><img src="images/message-icon.png" alt=""/></i>
                          <dl>
                            <dd>contato@resendetransportes.com.br</dd>
                          </dl>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 hidden-sm">
                    <div className="single_footer_widgets margin-top-95">
                      <h4 className="widget_title">Sobre</h4>
                      <p>
                      A Resende Transportadora realiza a sua entrega de maneira ágil, resguardada e inteligente. Nossa logística busca criar rotas seguras, econômicas e confortáveis para o frete dos mais diversos tipos de objetos, cargas e carregamentos. 
                      </p>

                      <ul className="footer_social_icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="single_footer_widgets margin-top-95">
                    <h4 className="widget_title">Indústria e suporte</h4>
                    <ul className="industry_support">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Sobre</a></li>
                      <li><a href="#">Regiões atendidas</a></li>
                      <li><a href="#">Contato</a></li>
                      <li><a href="#">Trabalhe conosco</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 hidden-sm hidden-xs">
                  <div className="single_footer_widgets">
                      <img src="images/rt-transportes-branco.svg" alt="footer logo"/>
                      <ul class="footer_copyright">
                        <li>Copyright © <a href="#">Resende Transportadora.</a></li>
                        <li>Todos os direitos reservados. 2021</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

let domContainer = document.querySelector('#footer');
ReactDOM.render(<Footer />, domContainer);