import React from 'react';
import Clients from '../../images/clientele.jpg';
// import Slider from 'react-slick';
// import Logo1 from '../OurClientele/logo/Al-Hadaayah.png';
// import Logo2 from '../OurClientele/logo/alibro.jpeg';
// import Logo3 from '../OurClientele/logo/bnt.jpeg';
// import Logo4 from '../OurClientele/logo/cbn.gif';
// import Logo5 from '../OurClientele/logo/deda.png';
// import Logo6 from '../OurClientele/logo/ecowas.png';
// import Logo7 from '../OurClientele/logo/ehealth.png';
// import Logo8 from '../OurClientele/logo/funtaj.png';
// import Logo9 from '../OurClientele/logo/giz.gif';
// import Logo10 from '../OurClientele/logo/himart.jpeg';
// import Logo11 from '../OurClientele/logo/icice.png';
// import Logo12 from '../OurClientele/logo/ikore.png';
// import Logo14 from '../OurClientele/logo/merryberries.png';
// import Logo15 from '../OurClientele/logo/navy.png';
// import Logo16 from '../OurClientele/logo/airforce.png';
// import Logo17 from '../OurClientele/logo/presidency.png';
// import Logo19 from '../OurClientele/logo/army.jpeg';
// import Logo20 from '../OurClientele/logo/TSS.png';

import { ClienteleContainer,
Heading,
ClientsBg,
ImageBg
// Clientele,
// Logo 
} from './OurClienteleElements';

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "#dfdfdf", marginRight: "15px" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "#dfdfdf", marginLeft: "15px" }}
//         onClick={onClick}
//       />
//     );
//   }


const ClienteleSection = ({id, title}) => {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slideToScroll: 5,
    //     swipeToSlide: true,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,

    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: true
    //           }
    //         },
    //         {
    //           breakpoint: 900,
    //           settings: {
    //             className: "center",
    //             centerMode: true,
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             initialSlide: 3
    //           }
    //         },
    //         {
    //           breakpoint: 780,
    //           settings: {
    //             className: "center",
    //             centerMode: true,
    //             slidesToShow: 2,
    //             slidesToScroll: 1
    //           }
    //         },
    //         {
    //             breakpoint: 320,
    //             settings: {
    //               className: "center",
    //               centerMode: true,
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           }
    //       ]
    // };

    
  return (
    <ClienteleContainer id={id} >
        <Heading>{title}</Heading>
        <ClientsBg>
            <ImageBg src={Clients}/>
        </ClientsBg>
        {/* <Slider {...settings}>
            <Clientele>
                <Logo src={Logo1} />
            </Clientele>
            <Clientele>
                <Logo src={Logo2} style={{width:'120px'}} />
            </Clientele>
            <Clientele>
                <Logo src={Logo4} />
            </Clientele>
            <Clientele>
                <Logo src={Logo5} />
            </Clientele>
            <Clientele>
                <Logo src={Logo6} />
            </Clientele>
            <Clientele>
                <Logo src={Logo3} style={{width:'120px'}} />
            </Clientele>
            <Clientele>
                <Logo src={Logo7} />
            </Clientele>
            <Clientele>
                <Logo src={Logo8} />
            </Clientele>
            <Clientele>
                <Logo src={Logo9} />
            </Clientele>
            <Clientele>
                <Logo src={Logo10} />
            </Clientele>
            <Clientele>
                <Logo src={Logo11} />
            </Clientele>
            <Clientele>
                <Logo src={Logo12} style={{width:'150px'}} />
            </Clientele>
            <Clientele>
                <Logo src={Logo14} />
            </Clientele>
            <Clientele>
                <Logo src={Logo15} />
            </Clientele>
            <Clientele>
                <Logo src={Logo16} />
            </Clientele>
            <Clientele>
                <Logo src={Logo17} />
            </Clientele>
            <Clientele>
                <Logo src={Logo19} />
            </Clientele>
            <Clientele>
                <Logo src={Logo20} />
            </Clientele>

        </Slider> */}
    </ClienteleContainer>
  )
}

export default ClienteleSection;