import React from 'react'
import Quote from "../components/Quote";


function DetailLeft() {
  return (
    <div className="col-lg-8 col-12">
      <div className="tm-service-details sticky-sidebar">
        <img
          className="tm-service-details-image"
          src="images/others/service-details.jpg"
          alt="service details image"
        />
        <h2>Sports Rehabilitation</h2>
        <p>
          Delectus voluptatem fugiat doloremque ab in. Assumenda eos temporibus
          quia temporibus expedita numquam ut velit repellendus. Totam aperiam
          eum aut ea consequatur. Totam iure ab in ea possimus mollitia aperiam.
          Qui corporis officiis accusantium eveniet fugiat neque necessitatibus.
          Ipsum dolores fugit facere et labore et officia magnam sint.
        </p>
        <p>
          Placeat et assumenda omnis fugit aut quaerat modi qui. Qui et sequi.
          Sequi minima velit sapiente corporis dolor hic. Deleniti atque
          voluptas non mollitia sed illo hic magni.
        </p>

        <Quote text="Nulla omnis nulla rerum. Et architecto dolorem unde. In non
      molestiae vel autem iste. Architecto et eum beatae facilis. Illum
      aut non consequuntur reprehenderit velit sequi quia."/>

        <ul className="stylish-list">
          <li>
            <i className="fa fa-hand-o-right"></i> Eum dolor atque quisquam qui
            voluptate necessitatibus tempore.
          </li>
          <li>
            <i className="fa fa-hand-o-right"></i> Alias quidem non explicabo
            delectus totam dolores odit.
          </li>
          <li>
            <i className="fa fa-hand-o-right"></i> Et laboriosam magni animi
            dignissimos.
          </li>
          <li>
            <i className="fa fa-hand-o-right"></i> Adipisci dolorem minus quas
            voluptate sapiente velit unde veritatis.
          </li>
          <li>
            <i className="fa fa-hand-o-right"></i> Perferendis nihil veritatis.
          </li>
          <li>
            <i className="fa fa-hand-o-right"></i> Et reiciendis iure blanditiis
            quas sed dolore.
          </li>
        </ul>

        <div id="service-acc" className="tm-accordion pt-2">
          <div className="card">
            <div className="card-header" id="service-acc-heading1">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#service-acc-collapse1"
                  aria-expanded="true"
                  aria-controls="service-acc-collapse1"
                >
                  What is Sports Rehabilitation?
                </button>
              </h5>
            </div>
            <div
              id="service-acc-collapse1"
              className="collapse show"
              aria-labelledby="service-acc-heading1"
              data-parent="#service-acc"
            >
              <div className="card-body">
                <p>
                  Sint et et illum. Odio et nesciunt veritatis maxime quas esse
                  dolore. Beatae vel et modi quidem. Modi aut dolorem sed
                  necessitatibus ut voluptatem deleniti.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="service-acc-heading2">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#service-acc-collapse2"
                  aria-expanded="false"
                  aria-controls="service-acc-collapse2"
                >
                  What is our service of Sports Rehabilitation?
                </button>
              </h5>
            </div>
            <div
              id="service-acc-collapse2"
              className="collapse"
              aria-labelledby="service-acc-heading2"
              data-parent="#service-acc"
            >
              <div className="card-body">
                <p>
                  Voluptatum voluptas deserunt. Sed sed ipsum cum placeat et
                  nemo earum aspernatur consequatur. Autem beatae cum
                  accusantium sunt rerum est enim iste. Ut vero quis qui
                  distinctio quas omnis nostrum. Sunt tempore rem pariatur aut
                  odio necessitatibus amet dolorem illum. Facilis voluptatibus
                  eos.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="service-acc-heading3">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#service-acc-collapse3"
                  aria-expanded="false"
                  aria-controls="service-acc-collapse3"
                >
                  How do I make a perfect Business plan?
                </button>
              </h5>
            </div>
            <div
              id="service-acc-collapse3"
              className="collapse"
              aria-labelledby="service-acc-heading3"
              data-parent="#service-acc"
            >
              <div className="card-body">
                <p>
                  Voluptas pariatur ab officiis fuga quia eligendi. Et ab
                  provident amet voluptas praesentium. Qui ducimus modi qui
                  delectus sed aspernatur sed. Aut tempora quod quis vitae
                  ipsum. Harum in sint odio sint quia iste perspiciatis illo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailLeft