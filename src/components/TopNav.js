import React, { useState, useEffect } from 'react';
import { Menu,  Image } from 'semantic-ui-react';
import logo from "../img/logo.png"

const TopNav = ({handleNavClick, references}) => {

   let [name,setName] = useState("accueil")
   let [showShadow, setShowShadow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[])

    let handleScroll = () => {
        if(window.scrollY>20){
            setShowShadow(true)
        }else{
            setShowShadow(false)

        }
    }



   let styles = (myName) => (
    {
        menuItem : {
            fontSize: 25,
            fontWeight: "bold",
            fontStyle: "normal",
            fontFamily: "Lato",
            color: myName === name ? "#12A85C" :"#757575",
            cursor: "pointer"
        },
        logoText: {
            fontSize: 35,
            fontWeight: "bold",
            color: "#12A85C", marginLeft: 20
        },
        menu:{
            backgroundColor: "white",
            boxShadow: showShadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)": ""
        }
    }
   )
   
    let handleItem = (myName) => {
        setName(myName)
        handleNavClick(references[myName])
    }

    return (
        <>
            <Menu secondary fixed="top" style={styles().menu}>
                <Menu.Item>
                    <Image src={logo} />
                    <p style={styles().logoText}>Wergu</p>
                </Menu.Item>
               
                <Menu.Menu position='right'>
                    <Menu.Item as="p"
                        name='Accueil'
                        onClick={() => handleItem("accueil")}
                    //   active={activeItem === 'home'}
                        style={styles("accueil").menuItem}


                    />
                    

                    <Menu.Item as="p"
                        name='Nos solutions'
                    //   active={activeItem === 'messages'}
                    onClick={() => handleItem("nos_solutions")}
                    style={styles("nos_solutions").menuItem}
                    




                    />
                    <Menu.Item as="p"
                        name='La team'
                    //   active={activeItem === 'friends'}
                    onClick={() => handleItem("la_team")}
                    style={styles("la_team").menuItem}

                    />
                    {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
                    <Menu.Item as="p"
                        name='Nous contacter'
                    // active={activeItem === 'logout'}
                    //onClick={this.handleItemClick}
                    onClick={() => handleItem("nous_contacter")}
                    style={styles("nous_contacter").menuItem}
                    />
                </Menu.Menu>
            </Menu>
        </>
    );
};

export default TopNav;