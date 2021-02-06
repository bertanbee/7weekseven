import React from 'react';

import { FaInstagram, FaGithub, FaDiscord, FaLink, FaMapMarkerAlt } from 'react-icons/fa';
import './styles.css';
import styled from 'styled-components';

function Bottom () {
    const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 1);
    padding: 3%;
    .link {
        text-decoration: none;
        font-size: 17px;
        color: rgba(255, 255, 255, 0.93);
    }
    .link:hover {
        color: rgba(255, 255, 255, 0.6);
    }
    .link strong {
        color: rgba(255, 255, 255, 0.93);
    }
    .link:hover strong {
        color: rgba(255, 255, 255, 0.6);
    }
    `
    const Navigator = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
    const Creatorsinfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 36%;
    align-items: center;
    justify-content: center;
    border-left: 1px solid white;
    `
    const Photo = styled.div`
    height: 60px;
    width: 60px;
    padding: 12px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 1);
    `
    const Socialmedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 12px;
    padding-top: 12px;
    `
    const Media = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 2px;
    :hover {
        cursor: pointer;
    }
    .Icon {
        padding: 3px;
    }
    .anchor {
        text-decoration: none;
    }
    `
    const Bio = styled.p`
    text-align: center;
    padding-right: 3%;
    padding-left: 3%;
    `
    const Flag = styled.div`
    height: 14px;
    width: 20px;
    border: solid 1px white;
    `
    const Online = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background-color: rgba(0, 255, 0, 1);
    `
    const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    `
    const Lucasbertan = styled.h3`
    padding-right: 6px;
    padding-left: 12px;
    `
    const BottomNavigator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 12px;
    padding-left: 6px;
    padding-right: 6px;
    `
    const ArtWork = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    `
    const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 282px;
    padding-right: 15px;
    :hover .openlink {
        opacity: 1;
        transition: 0.17s;
    }
    `
    const OpenLinkPexels = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    height: 195px;
    width: 282px;
    margin-top: -195px;
    opacity: 0;
    transition: 0.17s;
    justify-content: center;
    align-items: center;
    .icon {
        height: 30px;
        width: 30px;
        padding: 6px;
    }
    `
    const CreatorInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    border-left: 1px solid #ffff;
    text-align: center;
    .creatorsinfo {
        padding-bottom: 3px;
        padding-top: 6px;
        padding-bottom: 6px;
    }
    `
    const SupportTitle = styled.h2`
    padding-bottom: 12px;
    `

    return (
        <Box>
            <Navigator>
                <ArtWork>
                    <ImageContainer>
                        <img className="image" height="195" width="282" src="https://images.pexels.com/photos/4465341/pexels-photo-4465341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="waterfalls"></img>
                        <OpenLinkPexels className="openlink">
                            <FaLink className="icon" height="200px" width="200px"></FaLink>
                            <a className="link" href="https://www.pexels.com/photo/water-falls-under-blue-sky-4465341/" target="_blank" rel="noopener noreferrer">Open on Pexels</a>
                        </OpenLinkPexels>
                    </ImageContainer>
                    <CreatorInformationBox>
                        <SupportTitle>Support the creators!</SupportTitle>
                        <p className="creatorsinfo"><strong>Photographer: </strong>Christhian Gruhh</p>
                        <a className="link" href="https://www.google.com/maps?q=place_id:ChIJ6QQqXrOW9pQR5FcHuImaHCI" target="_blank" rel="noopener noreferrer"><p className="creatorsinfo"><FaMapMarkerAlt></FaMapMarkerAlt> Brazil</p></a>
                    </CreatorInformationBox>
                </ArtWork>
            </Navigator>
            <Creatorsinfo>
                <Photo className="Photo"></Photo>
                <Name>
                    <Lucasbertan>Lucas Bertan</Lucasbertan>
                    <Online></Online>
                </Name>
                
                <p>Creator</p>
                <Flag className="Flag"></Flag>
                <Socialmedia>
                    <Media>
                        <FaInstagram className="Icon"></FaInstagram>
                        <a className="anchor" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </Media>
                    <Media>
                        <FaGithub className="Icon"></FaGithub>
                        <a className="anchor" href="https://github.com/bertanbee" target="_blank" rel="noopener noreferrer">bertanbee</a>
                    </Media>
                    <Media>
                        <FaDiscord className="Icon"></FaDiscord>
                        <a className="anchor" href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
                    </Media>

                </Socialmedia>
                <Bio>Salutations! My name is Lucas, and I am a Brazilian student. First, thank you very much for using my application! I hope it helps you to organize your week! By the way, I am still learning how to code even whether I am not in university, and this is my first serious project. That is why I would be glad to read your opinion about the app. It could help me improve and learn what people's needs are! At last, there is much more coming by! Follow me on my social media for more information and tips for your studying! See you next time!</Bio>
            </Creatorsinfo>
        </Box>
    )
}

export default Bottom;
