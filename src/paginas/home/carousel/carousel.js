import React, {Fragment} from 'react';
import { watch } from 'fs';
import '../carousel/carousel.css';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
];

const ProductCard = () => {
  
  return(
    <Fragment>

      <section>

        <div className='row'>

          <Carousel breakPoints={breakPoints}>

          {/* produto 1 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://http2.mlstatic.com/D_NQ_NP_668182-MLB28058832517_082018-O.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>Mesa</h6>

            </div>

            <div className='price'>

              <span>Pá comê com a familía</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* Produto 2 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpRtIoph5HWovmBXK5OHPVRbOC2t30HheSg&usqp=CAU"}></img></a>

            </div>

            <div className='title'>

                <h6>O que é isso?</h6>

            </div>

            <div className='price'>

              <span>Também não sei, só compre!</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 3 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://asenhoradomonte.com/wp-content/uploads/2013/03/rolhas-1.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>Curtininha abriu, olhou!</h6>

            </div>

            <div className='price'>

              <span>Não compre, sem Privacidade</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 4 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnVf5QP575QWo6Ig6ur6_7UwqilC93rBxFdna9m7sAViEXakpdcJTZF6mKVSKtroKh5E&usqp=CAU"}></img></a>

            </div>

            <div className='title'>

                <h6>Vassoura Sem Cabo</h6>

            </div>

            <div className='price'>

              <span>Se vira pra arrumar o cabo</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 5 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh_xi_YXzjyjYPZtFblDHibAvuDbF4LGn4Q&usqp=CAU"}></img></a>

            </div>

            <div className='title'>

                <h6>Cadeira</h6>

            </div>

            <div className='price'>

              <span>Feita de Tecidos Reutilizados</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 6 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-m5VoL7dZVdMzJcsBJ-1znbxnHOxV10gmNw&usqp=CAU"}></img></a>

            </div>

            <div className='title'>

                <h6>Vestido</h6>

            </div>

            <div className='price'>

              <span>Feito de Material Reciclado</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 7 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://materiaincognita.com.br/wp-content/uploads/2012/09/Passaros-Sucata-Eletronica.jpg"}></img></a>

            </div>

            <div className='title'>

                <h6>É cada coisa!😓</h6>

            </div>

            <div className='price'>

              <span>Feito de Material Reciclado</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          {/* produto 7 */}

          <div className='product'>

            <div className='product-thumb'>

              <a href='#'><img src={"https://arte.estadao.com.br/public/pages/43/1o/e2/g3/o5/8p/Calcado_Bibi_Mobile.png"}></img></a>

            </div>

            <div className='title'>

                <h6>Tênis Velho😜</h6>

            </div>

            <div className='price'>

              <span>Reutilizado pra plantar</span>

            </div>

            <div className='rating'>

              <div className='footer'>

              <div className='btn'>
                <a href='#' className='btn-custom primary'>ADD Carrinho</a>
                <a href='#' className='btn-custom second'>informações</a>
              </div>

              </div>

            </div>

          </div>

          </Carousel>

        </div>

      </section>

    </Fragment>
  )
}

export default ProductCard
