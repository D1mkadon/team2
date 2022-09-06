import React from 'react';
import classes from "./aboutUs.module.css";

import AboutUsSocial from "./aboutUsSocial/AboutUsSocial";



const AboutUs = () => {
    return (
        <div className={classes.AboutUs}>

            <h2 className={classes.h2}>About us:</h2>
         <div className={classes.div1}>
             <h2 className={classes.h2}> 123</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam at dolor doloremque dolores error illo ipsa, ipsam maiores nulla quam quasi rem suscipit. Dignissimos hic incidunt iste officiis quod.
         </div>
             <div className={classes.div2}>
                 <h2 className={classes.h2}> 123</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid consectetur cum earum eligendi eum illum impedit ipsa magni, maxime molestiae odio officia optio sint soluta totam ut voluptatibus!
         </div>
            <AboutUsSocial/>
        </div>

    );
};

export default AboutUs;