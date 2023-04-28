import React from 'react'
import '../css/Abaut.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { BsShieldFillCheck, BsFileEarmarkMedicalFill } from "react-icons/bs";
import { FaSearchDollar } from "react-icons/fa";
import Footer from './Footer';

function Abaut() {
  return (
    <>
      <div className='conteyner'>
        <div >
          <h1 className='service' >Best transportation <br /> service</h1>
        </div>
      </div>
      {/* ===================================================> Logistic start <======================================================= */}

      <div className='about__us'>
        <div className='about__left'> 
          <div className='medium'>
               <h1>About us</h1>
               <p>The Furious Logistics was created in 2020, although we are <br/> still new in this field, but I am sure that our company is <br/> one of the most successful companies in the world that <br/>provides services very quickly and successfully.Our team<br/> works hard every moment to ensure that our customers <br/> are satisfied with us and day by day the number of our <br/> customers increases.</p>
          </div>
        </div>
        <div className='about__right'>
          <div className='medium__right'>
              
                 <img className='vector ' src="https://sun6-20.userapi.com/s/v1/if1/tv26B083qCoa0MWS6r4pydM11rFzUh1fVxWQ5L-2uG_njPF2cdUpAeFkCEdMwdGwkztxkqhQ.jpg?size=1870x2160&quality=96&crop=0,0,1870,2160&ava=1" alt="" />
                 <img className='img__conteyner' src="https://i.pinimg.com/originals/94/da/19/94da19fd67be57d1e187b4c317ec5c87.png" alt="404" />
          </div>
        </div>
      </div>

      <div className='logistic__conteyner'>
        <div className='logistic__text'> <h1>Why Furious Logistic</h1></div>
        <div className='logistic'>
          <div className="card1">
            <img src="https://pbs.twimg.com/media/EiikqDeX0AMVyZR?format=png&name=240x240" alt="404" />
              <h2>Quick service</h2>
              <p>We provide our customers  with the fastes service</p>
          </div>
          <div className="card1">
                <img src="https://abform.uz/wp-content/uploads/2021/10/safe-delivery.png" alt="404" />  
                <h2>High pitching</h2>
              <p>We provide our customers  with the fastes service</p>
          </div>
          <div className="card1">
                <img src="https://bireysel.turktelekom.com.tr/mobil/web/kampanyalar/PublishingImages/saglikli-ysam-taylan.png" alt="404" />
                <h2>Humantiy</h2>     
                <p>We with our team preserve our humanity</p>
          </div>
          <div className="card1">
                     <img src="https://joomla-secrets.ru/images/Logo/icon-_category-icon-our-values.png" alt="404" />
                     <h2>Qualifications</h2>
                     <p>Each of our employees is highly qualified</p>
          </div>
        </div>
      </div>
      {/* ===================================================> Logistic end <======================================================= */}

      {/* ===================================================> Team start <======================================================= */}
      <div className='team'>
        <h1 className='team__text'>Our Team</h1>
        <div className="team__card__conteyner">
          <div className="team__card ">
            <CardGroup >
              <Card className='cardGrup'>
                <Card.Img /> < HiOutlineUserCircle size={100} />
                <Card.Body>
                  <Card.Title className='card__text' >Ibrohimov Zuhriddin</Card.Title>
                  <Card.Text className='card__menejer'>
                    Ceo direktor/ Top menejer
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
          </div>
          <div className="team__card">
            <CardGroup>
              <Card>
                <Card.Img /> < HiOutlineUserCircle size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Ibrohimov Zuhriddin</Card.Title>
                  <Card.Text className='card__menejer'>
                    Ceo direktor/ Top menejer
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
          </div>
          <div className="team__card">
            <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < HiOutlineUserCircle size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Ibrohimov Zuhriddin</Card.Title>
                  <Card.Text className='card__menejer'>
                    Ceo direktor/ Top menejer
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
          </div>
        </div>
      </div>
      {/* ===================================================> Team end <======================================================= */}

      {/* ===============================================> Sevices  start<============================================== */}

      <div className='inception__sevices'>
        <h1 className='sevices__text'>Our Sevices</h1>

        <div className='sevices'>


          <div className='sevices__conteyner'>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < MdOutlineSupportAgent size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>24/7 Support Team</Card.Title>
                  <Card.Text className='card__menejer'>
                    We work 24 hours a day, 7 days a week. Our team  is always ready to answer your freight questions.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < BsPersonLinesFill size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Knowledgeable Dispetchers</Card.Title>
                  <Card.Text className='card__menejer'>
                    We are experienced group of professional truck dispetchers.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < GiOpenBook size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Risk-Free Booking</Card.Title>
                  <Card.Text className='card__menejer'>
                    Customers love flexibility. Many likes having the option to cancel service for free. If you cencel the service, you will receive a full refund if you cancel prior to dispatching.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < BsShieldFillCheck size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Insurance Coverage</Card.Title>
                  <Card.Text className='card__menejer'>
                    Insurance coverage is included in your shipping quote. Up to $2500000 on open and enclosed transport.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < FaSearchDollar size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>No Hidden Fees</Card.Title>
                  <Card.Text className='card__menejer'>
                    We have no hidden fees. We guarantee that rate you see on quote is the rate you pay.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
            <div className="sevices__card">  <CardGroup>
              <Card>
                <Card.Img className='card__img' /> < BsFileEarmarkMedicalFill size={100} />
                <Card.Body>
                  <Card.Title className='card__text'>Licensed and Bonded</Card.Title>
                  <Card.Text className='card__menejer'>
                    TURON LT INC.is licensed and bonded as required by the USDOT. Our license number is  MC xxxxxx
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
              </Card>

            </CardGroup></div>
          </div>
        </div>
      </div>
      {/* ===================================================> Sevices end<======================================================= */}

      <Footer />
    </>
  )
}

export default Abaut