
class Cotacao extends React.Component {
  render() {
    return (
      <section class="get_quote_area content-left">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="section_title nice_title_white_left">
                <h4>COTAÇÃO</h4>
                <p>
                  Seu frete está em boas mãos.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="section_content">
              <div class="col-md-7">
                <div class="row">
                  <form action="index.html">
                    <div class="form-group col-md-6 col-sm-6">
                        <div class="input-group">
                            <input type="text" placeholder="Nome do responsável"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6 col-sm-6">
                      <div class="input-group">
                        <input type="text" placeholder="Local de coleta da carga"/>       
                      </div>
                    </div>
                    <div class="form-group col-md-6 col-sm-6">
                      <div class="input-group">
                          <input type="text" placeholder="Local de entrega da carga"/>
                      </div>
                    </div>
                    <div class="form-group col-md-6 col-sm-6">
                      <div class="input-group">
                          <input type="text" placeholder="Peso"/>
                      </div>
                    </div>
                    <div class="form-group col-md-6 col-sm-6">
                      <div class="input-group">
                          <input type="text" placeholder="Tamanho"/>
                      </div>
                    </div>
                    <div class="form-group col-md-6 col-sm-6">
                      <div class="input-group">
                        <input type="date" placeholder="Data"/>
                      </div>
                    </div>
                    <div class="form-group submit col-md-3 col-sm-3">
                      <input class="btn" type="submit" value="Enviar"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

let domCotacao = document.querySelector('#cotacao')
ReactDOM.render(<Cotacao />, domCotacao)