import React from 'react';
const Offer = (props) => {

const styles = {
    marginBottom: 20
}

    return ( 
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform:'uppercase',
            }}>{props.title}</h3>
            <p style={{
                fontSize: 18,
            }}>{props.text}</p>
        </article>
     );
}
 
export default Offer;