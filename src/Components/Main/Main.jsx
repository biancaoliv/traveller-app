import React, {useEffect} from 'react';
import './main.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuClipboardCheck } from "react-icons/lu";
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Fernando de Noronha',
        location: 'Pernambuco',
        grade: 'CULTURAL RELAX ',
        fees: '&700',
        description:
            'Fernando de Noronha is known worldwide for its beaches and fantastic landscapes. The place is one of the best destinations in Brazil when it comes to paradisiacal places. It is an archipelago that comprises 21 islands, all with white sand and calm.',
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Chapada Diamantina',
        location: 'Bahia',
        grade: 'CULTURAL RELAX ',
        fees: '&800',
        description:
            'Located in the center of the state of Bahia, this mountainous region attracts tourists from all over the world. It is possible to find caves, waterfalls, mountains with cinematic landscapes, among other remarkable and incredible things.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Chapada dos Veadeiros',
        location: 'Goiás',
        grade: 'CULTURAL RELAX ',
        fees: '&700',
        description:
            'This national park is known as the birthplace of waters and attracts many visitors who pass through the state of Goiás. The destination has several waterfalls of various sizes and a river with calm and transparent waters.',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Jalapão',
        location: 'Tocantins',
        grade: 'CULTURAL RELAX ',
        fees: '&900',
        description:
            'The place is well-known for its strong ecotourism, with abundant waters, plateaus, mountains and dunes. Visitors can take advantage of the opportunity to bathe in clear springs and admire the incredible rock formations there.',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Angra dos Reis ',
        location: 'Rio de Janeiro',
        grade: 'CULTURAL RELAX ',
        fees: '&900',
        description:
            'One of the main cities to visit in Rio de Janeiro, Angra dos Reis gives you the impression that you are in a place outside of Brazil. The beaches are truly paradisiacal, and the city has historical buildings that also contribute greatly to the fantastic scenery.',
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Ilha do Marajó',
        location: 'Pará',
        grade: 'CULTURAL RELAX ',
        fees: '&700',
        description:
            'Marajó Island is well-known for its pororocas (large waves formed by the meeting of waters) that form there. You can enjoy beaches, dunes and forests in this destination that delights any tourist.',
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Ilhabela',
        location: 'São Paulo',
        grade: 'CULTURAL RELAX ',
        fees: '&700',
        description:
            'It is the largest maritime island in Brazil and has more than 30 beaches and 300 waterfalls throughout its territory. With landscapes full of mountains with native vegetation and beaches with blue waters, it offers tours that allow you to learn about its history marked by shipwrecks and pirates.',
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Lençóis Maranhenses',
        location: 'Maranhão',
        grade: 'CULTURAL RELAX ',
        fees: '&700',
        description:
            'Lençóis Maranhenses National Park is a protected area on the northern coast of Brazil and is known for its desert landscape with large white sand dunes and rainwater lagoons. Sandbanks can reach 40 meters in height and the most famous lagoons are Lagoa Azul and Lagoa Bonita.',
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Porto de Galinhas',
        location: 'Pernambuco',
        grade: 'CULTURAL RELAX ',
        fees: '&900',
        description:
            'It is the perfect destination for those who want to relax surrounded by nature. With several beaches with crystal clear waters, the region also stands out for its natural pools of warm water formed between corals, as well as its beautiful landscapes with white sand and coconut trees.',
    },
];
const Main = () => {
    
        useEffect(() => {
            Aos.init({duration: 2000})
        }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {Data.map(
                    ({
                        id,
                        imgSrc,
                        destTitle,
                        location,
                        grade,
                        fees,
                        description,
                    }) => {
                        return (
                            <div data-aos="fade-up"  key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <LuClipboardCheck  className='icon'/>
                                    </button>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
};

export default Main;
