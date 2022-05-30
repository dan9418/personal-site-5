import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import './portfolio.scss';

const PORTFOLIO_CONFIG = [
    {
        name: 'Album Covers',
        description: 'Artwork for various musical projects',
        images: [
            {
                name: 'Silent City (Front)',
                year: 2017,
                caption: '',
                path: '../../static/albums/silent_city.jpg'
            },
            {
                name: 'Silent City (Back)',
                year: 2017,
                caption: '',
                path: '../../static/albums/silent_city_back.jpg'
            },
            {
                name: 'Need Not',
                year: 2018,
                caption: '',
                path: '../../static/albums/need_not.jpg'
            },
            {
                name: 'Peanut Butter Jam',
                year: 2016,
                caption: '',
                path: '../../static/albums/peanut_butter_jam.jpg'
            },
            {
                name: 'Songs; And How NOT To Write Them! (Front)',
                year: 2015,
                caption: '',
                path: '../../static/albums/songs_and_how_not_to_write_them.jpg'
            },
            {
                name: 'Songs; And How NOT To Write Them! (Back)',
                year: 2015,
                caption: '',
                path: '../../static/albums/songs_and_how_not_to_write_them_back.jpg'
            },
            {
                name: 'Yellow Snow',
                year: 2015,
                caption: '',
                path: '../../static/albums/yellow_snow.jpg'
            },
            {
                name: 'Human Architecture',
                year: 2017,
                caption: '',
                path: '../../static/albums/human_architecture.jpg'
            },
            {
                name: 'Mac DeMarco Covers (Parody)',
                year: 2017,
                caption: '',
                path: '../../static/albums/mac_demarco_covers.jpg'
            },
            {
                name: 'Out Of Reach',
                year: 2011,
                caption: '',
                path: '../../static/albums/out_of_reach.jpg'
            },
            {
                name: 'String',
                year: 2017,
                caption: '',
                path: '../../static/albums/string.jpg'
            },
            {
                name: 'Of Dreams',
                year: 2017,
                caption: '',
                path: '../../static/albums/of_dreams.jpg'
            }
        ]
    },
    {
        name: 'Snapchat Filters',
        description: 'Some Snapchat geofilters I designed in college',
        images: [
            {
                name: 'Chesterfield Street',
                year: 2015,
                caption: '',
                path: '../../static/filters/chesterfield.png'
            },
            {
                name: 'WPTS Radio',
                year: 2015,
                caption: '',
                path: '../../static/filters/wpts.png'
            },
            {
                name: 'Ward Street',
                year: 2016,
                caption: '',
                path: '../../static/filters/ward.png'
            },
            {
                name: 'Pitt Residence Halls',
                year: 2015,
                caption: '',
                path: '../../static/filters/pitt.jpg'
            }
        ]
    },
    {
        name: 'Just For Fun',
        description: 'Some fun pieces indulging my goofy sense of humor',
        images: [
            {
                name: 'Angels & Demons',
                year: 2011,
                caption: '',
                path: '../../static/personal/angel_demon.jpg'
            },
            {
                name: 'CEO Bednarczyk',
                year: 2013,
                caption: '',
                path: '../../static/personal/ceo.jpg'
            },
            {
                name: 'Stalemate',
                year: 2017,
                caption: '',
                path: '../../static/personal/chess.jpg'
            },
            {
                name: 'Dolla Dolla Bill Y\'all',
                year: 2011,
                caption: '',
                path: '../../static/personal/dollar.jpg'
            },
            {
                name: 'The Godfather Parody',
                year: 2011,
                caption: '',
                path: '../../static/personal/godfather.jpg'
            },
            {
                name: 'Hostage',
                year: 2011,
                caption: '',
                path: '../../static/personal/hostage.jpg'
            },
            {
                name: 'My Good Friend Jimmy',
                year: 2014,
                caption: '',
                path: '../../static/personal/jimmy_fallon.jpg'
            },
            {
                name: 'MiniMe',
                year: 2011,
                caption: '',
                path: '../../static/personal/minime.jpg'
            },
            {
                name: 'Have You Seen Me?',
                year: 2011,
                caption: '',
                path: '../../static/personal/missing_fridge.jpg'
            },
            {
                name: 'Multitasking',
                year: 2009,
                caption: '',
                path: '../../static/personal/multitasking.jpg'
            },
            {
                name: 'The Simpsons Parody',
                year: 2011,
                caption: '',
                path: '../../static/personal/simpsons.jpg'
            },
            {
                name: 'Skydiving',
                year: 2011,
                caption: '',
                path: '../../static/personal/skydiving.jpg'
            },
            {
                name: 'Painted (Green Day Parody)',
                year: 2011,
                caption: '',
                path: '../../static/personal/spray_paint.jpg'
            },
            {
                name: 'Digital World',
                year: 2012,
                caption: '',
                path: '../../static/personal/tv.jpg'
            }
        ]
    },
    {
        name: 'T-Shirts',
        description: 'Some shirts I designed in college',
        images: [
            {
                name: 'E-Week: Harry Potter',
                year: 2014,
                caption: '',
                path: '../../static/shirts/harry_potter.jpg'
            },
            {
                name: 'E-Week: Hunger Games',
                year: 2015,
                caption: '',
                path: '../../static/shirts/hunger_games.jpg'
            },
            {
                name: 'E-Week: Freshmen Crest',
                year: 2014,
                caption: '',
                path: '../../static/shirts/freshmen.jpg'
            },
            {
                name: 'E-Week: Pixar',
                year: 2017,
                caption: '',
                path: '../../static/shirts/pixar.jpg'
            },
            {
                name: 'The Panther Pitt',
                year: 2016,
                caption: '',
                path: '../../static/shirts/panther_pitt.jpg'
            }
        ]
    },
    {
        name: 'Tattoos',
        description: 'Some tattoos I designed',
        images: [
            {
                name: 'Nature Arm Band',
                year: 2017,
                caption: '',
                path: '../../static/tattoos/lost_is_found.jpg'
            },
            {
                name: 'Harmonic Series',
                year: 2019,
                caption: '',
                path: '../../static/tattoos/harmonic_series.png'
            },
            {
                name: 'Binary Cross',
                year: 2015,
                caption: '',
                path: '../../static/tattoos/binary_cross.png'
            },
            {
                name: 'Bike',
                year: 2018,
                caption: '',
                path: '../../static/tattoos/bike.png'
            }
        ]
    }
];

const PortfolioPage = () => {
    return (
        <>
            <div>
                <h2>Album Covers</h2>
                <p>text</p>
                <div className="gallery">
                    <StaticImage
                        src='../assets/albums/silent_city.jpg'
                        alt='Silent City'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/silent_city_back.jpg'
                        alt='Silent City (Back)'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/need_not.jpg'
                        alt='Need Not'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/peanut_butter_jam.jpg'
                        alt='Peanut Butter Jam'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/songs_and_how_not_to_write_them.jpg'
                        alt='Songs! And How NOT To Write Them!'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/songs_and_how_not_to_write_them_back.jpg'
                        alt='Songs! And How NOT To Write Them! (Back)'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/human_architecture.jpg'
                        alt='Human Architecture'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/mac_demarco_covers.jpg'
                        alt='Mac DeMarco Covers (parody)'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/out_of_reach.jpg'
                        alt='Out of Reach'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/string.jpg'
                        alt='Indigo Zoo - String'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                    <StaticImage
                        src='../../static/albums/of_dreams.jpg'
                        alt='Indigo Zoo - Of Dreams'
                        placeholder="blurred"
                        layout="fixed"

                        height={256}
                    />
                </div>
            </div>
        </>
    )
}

export default PortfolioPage
